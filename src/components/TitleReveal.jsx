import { useEffect, useMemo, useRef, useState } from "react";
import React from "react";

const STAGGER_SECONDS = 0.03;

const getPlainText = (node) => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getPlainText).join("");
  }
  if (React.isValidElement(node)) {
    if (node.type === "br") {
      return " ";
    }
    return getPlainText(node.props.children);
  }
  return "";
};

const renderString = (value, counter) => {
  const tokens = String(value).split(/(\s+)/);
  return tokens.map((token) => {
    if (!token) {
      return null;
    }
    if (/^\s+$/.test(token)) {
      return token;
    }
    const wordIndex = counter.word;
    counter.word += 1;
    return (
      <span
        key={`word-${wordIndex}`}
        className="title-reveal__word"
        style={{ "--delay": `${wordIndex * STAGGER_SECONDS}s` }}
      >
        <span className="title-reveal__word-inner">{token}</span>
      </span>
    );
  });
};

const renderChars = (node, counter) => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return null;
  }
  if (typeof node === "string" || typeof node === "number") {
    return renderString(node, counter);
  }
  if (Array.isArray(node)) {
    return node.flatMap((child) => renderChars(child, counter));
  }
  if (React.isValidElement(node)) {
    if (node.type === "br") {
      const index = counter.word;
      counter.word += 1;
      return <br key={`br-${index}`} />;
    }
    const nextChildren = renderChars(node.props.children, counter);
    return React.cloneElement(node, {
      key: node.key ?? `el-${counter.word}`,
      children: nextChildren,
    });
  }
  return null;
};

export default function TitleReveal({
  as: Tag = "h2",
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const plainText = useMemo(() => getPlainText(children), [children]);
  const chars = useMemo(() => {
    const counter = { word: 0 };
    return renderChars(children, counter);
  }, [children]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReduced.matches) {
      setRevealed(true);
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`title-reveal ${revealed ? "title-reveal--animate" : ""} ${className}`}
      aria-label={plainText.replace(/\s+/g, " ").trim()}
      role="text"
      {...props}
    >
      <span className="title-reveal__text" aria-hidden="true">
        {chars}
      </span>
    </Tag>
  );
}

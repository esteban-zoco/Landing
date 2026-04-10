import { useEffect } from "react";
import "./OrganizerTermsPage.css";
import zocoLogo from "../assets/logo/zocotickets.png";

const sections = [
  {
    title: "Ultima actualizacion: 06/04/2026",
    body: (
      <p>
        POLITICA DE PRIVACIDAD - PLATAFORMA WEB TICKETERA ZOCO
      </p>
    ),
  },
  {
    chapter: "CAPITULO I",
    chapterTitle: "TRATAMIENTO DE DATOS PERSONALES",
    title: "1. RESPONSABLE DEL TRATAMIENTO Y ALCANCE",
    body: (
      <>
        <p>
          La presente Politica de Privacidad regula el tratamiento de los datos personales recabados a traves
          del sitio web y de la Plataforma Ticketera ZOCO (en adelante, la "Plataforma"), propiedad de ZOCO
          S.A.S., con domicilio en Avenida Peron 2580, ciudad de Yerba Buena, provincia de Tucuman,
          Republica Argentina, en su caracter de responsable del tratamiento conforme a la Ley N. 25.326 de
          Proteccion de los Datos Personales.
        </p>
        <p>
          La Plataforma permite a los usuarios seleccionar y adquirir entradas para eventos organizados por
          terceros independientes, actuando ZOCO exclusivamente como intermediario tecnologico y proveedor de
          servicios de cobro y emision de entradas digitales.
        </p>
      </>
    ),
  },
  {
    title: "2. DATOS PERSONALES RECOPILADOS",
    body: (
      <>
        <p>
          ZOCO recopila unicamente los datos personales necesarios para permitir el registro en la
          Plataforma, la navegacion, adquisicion y la gestion de la compra de entradas, la emision de
          comprobantes y el cumplimiento de obligaciones legales y contractuales.
        </p>
        <p>
          Dichos datos pueden incluir, segun el caso, nombre y apellido, tipo y numero de documento (DNI),
          correo electronico, numero de telefono y demas datos de contacto, informacion vinculada a la
          operacion realizada, eventos y entradas adquiridas, asi como datos tecnicos basicos del dispositivo
          utilizados para fines de seguridad, trazabilidad y correcto funcionamiento del servicio.
        </p>
        <p>
          Los datos vinculados a los medios de pago son procesados directamente por proveedores de servicios
          de cobro electronicos certificados, sin que ZOCO almacene informacion sensible de tarjetas u otros
          instrumentos de pago.
        </p>
      </>
    ),
  },
  {
    title: "3. FINALIDAD DEL TRATAMIENTO",
    body: (
      <>
        <p>
          Los datos personales recolectados son tratados con finalidades legitimas, explicitas y directamente
          relacionadas con el funcionamiento de la Plataforma.
        </p>
        <p>En particular, se utilizan para:</p>
        <ol className="terms-alpha-list">
          <li>permitir el uso de la Plataforma;</li>
          <li>gestionar el proceso de compra de entradas y la emision y envio de tickets digitales con QR;</li>
          <li>procesar pagos, enviar confirmaciones y notificaciones vinculadas a las operaciones realizadas;</li>
          <li>brindar soporte y atencion al usuario;</li>
          <li>gestionar el derecho de arrepentimiento, consultas y reclamos;</li>
          <li>cumplir con obligaciones legales y regulatorias;</li>
          <li>garantizar la seguridad, trazabilidad, prevencion de fraude y usos indebidos;</li>
          <li>realizar analisis estadistico, metricas de uso, mejora de servicios y desarrollo de productos.</li>
        </ol>
        <p>
          Asimismo, los datos podran ser utilizados, de manera compatible con las finalidades aqui
          descriptas, para acciones de comunicacion, mejora de servicios y desarrollo de productos por parte
          de ZOCO y de otras sociedades que integran su grupo economico, incluyendo aquellas que prestan
          servicios de pagos u otros servicios tecnologicos relacionados, sin que ello implique un uso directo
          o independiente de la informacion ni su cesion a terceros ajenos al grupo.
        </p>
        <p>
          En ningun caso los datos personales seran utilizados con fines distintos de los aqui informados sin
          el consentimiento del titular, cuando este resulte legalmente exigible.
        </p>
      </>
    ),
  },
  {
    title: "4. CARACTER OBLIGATORIO DE LA INFORMACION",
    body: (
      <>
        <p>
          El suministro de los datos personales requeridos por ZOCO constituye un requisito indispensable en
          la medida en que resulte necesario para la identificacion del Consumidor, la celebracion y ejecucion
          de la relacion contractual, asi como para la adecuada prestacion de los servicios ofrecidos a traves
          de la Plataforma.
        </p>
        <p>
          La negativa a proporcionar dichos datos, asi como su inexactitud, insuficiencia o falta de
          actualizacion, podra imposibilitar la correcta prestacion del servicio, incluyendo la imposibilidad
          de completar la operacion, emitir las entradas correspondientes o acceder a determinadas
          funcionalidades de la Plataforma.
        </p>
      </>
    ),
  },
  {
    title: "5. SEGURIDAD DE LA INFORMACION Y PAGOS",
    body: (
      <>
        <p>
          Los pagos se procesan mediante plataformas de cobro electronico que cumplen con estandares de
          seguridad PCI DSS y mecanismos de autenticacion reforzada, tales como 3D Secure.
        </p>
        <p>
          Los datos se transmiten cifrados y tokenizados, reduciendo el riesgo de accesos no autorizados.
          ZOCO adopta medidas tecnicas y organizativas razonables para proteger los datos personales contra
          perdida, uso indebido, acceso no autorizado, alteracion o divulgacion indebida.
        </p>
      </>
    ),
  },
  {
    chapter: "CAPITULO II",
    chapterTitle: "COMUNICACION, CONSERVACION Y DERECHOS",
    title: "6. CESION Y COMUNICACION DE DATOS",
    body: (
      <>
        <p>
          Los datos personales podran ser comunicados a los Organizadores del evento adquirido,
          exclusivamente en la medida necesaria para la correcta ejecucion del contrato de compraventa
          celebrado entre el Comprador y el Organizador, en el marco del rol de ZOCO como intermediario
          tecnologico en la gestion y emision de entradas digitales.
        </p>
        <p>Dicha comunicacion tendra como finalidad permitir:</p>
        <ol className="terms-alpha-list">
          <li>la adecuada identificacion del consumidor el dia del evento;</li>
          <li>la validacion del ticket emitido;</li>
          <li>el control de acceso;</li>
          <li>la gestion de acreditaciones;</li>
          <li>la atencion de reclamos vinculados al espectaculo;</li>
          <li>el cumplimiento de obligaciones legales aplicables al Organizador.</li>
        </ol>
        <p>
          El Organizador actuara como responsable independiente del tratamiento respecto de los datos
          personales que le sean comunicados y se compromete a tratarlos de conformidad con la normativa
          vigente en materia de proteccion de datos personales y en terminos compatibles con la presente
          Politica de Privacidad.
        </p>
        <p>
          En caso de que el Organizador pretenda utilizar los datos para finalidades distintas a las aqui
          informadas, debera obtener el consentimiento correspondiente del titular y brindarle la informacion
          exigida por la Ley N. 25.326.
        </p>
        <p>
          Asimismo, ZOCO podra compartir informacion con proveedores tecnologicos que actuan como encargados
          del tratamiento, tales como pasarelas de pago, herramientas de analisis y metricas de uso,
          servicios de email marketing y servicios de hosting o infraestructura, y con entidades de pago o
          autoridades competentes, cuando exista una obligacion legal o un requerimiento valido.
        </p>
        <p>
          En todos los casos, dichos terceros acceden unicamente a la informacion estrictamente necesaria para
          la prestacion de sus servicios, bajo acuerdos de confidencialidad y seguridad adecuados.
        </p>
        <p>ZOCO no comercializa ni cede datos personales con fines publicitarios.</p>
      </>
    ),
  },
  {
    title: "7. ALMACENAMIENTO Y CONSERVACION DE LOS DATOS",
    body: (
      <>
        <p>
          Los datos personales tratados a traves de la Plataforma son almacenados en entornos tecnologicos
          que cuentan con medidas de seguridad adecuadas para proteger la informacion.
        </p>
        <p>
          El acceso a la Plataforma y la transmision de datos se realizan mediante protocolos seguros
          (HTTPS), con accesos restringidos exclusivamente a personal y sistemas autorizados, y mediante el
          uso de mecanismos de encriptacion destinados a prevenir accesos no autorizados, perdidas,
          alteraciones o divulgaciones indebidas.
        </p>
        <p>
          ZOCO adopta medidas tecnicas y organizativas razonables acordes a la naturaleza de los datos
          tratados y a las mejores practicas de la industria, con el objetivo de garantizar la
          confidencialidad, integridad y disponibilidad de la informacion.
        </p>
        <p>
          Los datos personales seran conservados durante el tiempo necesario para cumplir con las finalidades
          para las cuales fueron recabados o mientras subsistan obligaciones legales, contractuales o
          regulatorias. Cumplidos dichos plazos, la informacion sera eliminada o anonimizada de forma segura.
        </p>
      </>
    ),
  },
  {
    title: "8. DERECHOS DE LOS TITULARES DE LOS DATOS",
    body: (
      <p>
        El titular de los datos personales podra ejercer los derechos de acceso, rectificacion, actualizacion
        y supresion, conforme a la Ley N. 25.326, mediante comunicacion dirigida a{" "}
        <a href="mailto:info@zocoweb.com.ar">info@zocoweb.com.ar</a>.
      </p>
    ),
  },
  {
    title: "9. ENLACES A SITIOS DE TERCEROS",
    body: (
      <p>
        La Plataforma puede contener enlaces a sitios web de terceros, incluidos los de los Organizadores.
        ZOCO no es responsable por las practicas de privacidad ni por los contenidos de dichos sitios, por lo
        que se recomienda al usuario revisar las politicas de privacidad correspondientes.
      </p>
    ),
  },
  {
    chapter: "CAPITULO III",
    chapterTitle: "VIGENCIA Y CONTACTO",
    title: "10. MODIFICACIONES",
    body: (
      <p>
        ZOCO podra modificar la presente Politica de Privacidad en cualquier momento, publicando la version
        actualizada en la Plataforma. Las modificaciones entraran en vigencia desde su publicacion.
      </p>
    ),
  },
  {
    title: "11. CONTACTO",
    body: (
      <p>
        Para consultas, reclamos o el ejercicio de derechos relacionados con la presente Politica de
        Privacidad, los usuarios podran comunicarse con ZOCO a traves del correo electronico{" "}
        <a href="mailto:info@zocoweb.com.ar">info@zocoweb.com.ar</a>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <header className="terms-hero">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-[72px] lg:min-w-[1440px] terms-hero-inner">
          <div className="terms-topbar">
            <a href="/" className="terms-back-link">
              Volver al inicio
            </a>
            <img src={zocoLogo} alt="ZOCO Tickets" className="terms-logo" />
          </div>
          <span className="terms-pill">Plataforma Web Ticketera</span>
          <h1 className="terms-title">Politica de Privacidad</h1>
          <p className="terms-subtitle">POLITICA DE PRIVACIDAD - PLATAFORMA WEB TICKETERA ZOCO</p>
        </div>
      </header>

      <main className="terms-content">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-[72px] lg:min-w-[1440px]">
          <article className="terms-card">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="terms-section"
                style={{ "--section-index": index }}
              >
                {section.chapter ? (
                  <div className="terms-chapter">
                    <p className="terms-chapter-title">{section.chapter}</p>
                    <p className="terms-chapter-subtitle">{section.chapterTitle}</p>
                  </div>
                ) : null}
                <h2>{section.title}</h2>
                {section.body}
              </section>
            ))}
          </article>
        </div>
      </main>
    </div>
  );
}

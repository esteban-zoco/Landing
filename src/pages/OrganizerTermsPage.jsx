import { useEffect } from "react";
import "./OrganizerTermsPage.css";
import zocoLogo from "../assets/logo/zocotickets.png";

const sections = [
  {
    chapter: "CAPÍTULO I",
    chapterTitle: "DISPOSICIONES GENERALES",
    title: "1. OBJETO, ALCANCE Y CONDICIONES DE ACCESO",
    body: (
      <>
        <p>
          Los presentes Términos y Condiciones regulan el acceso y uso del Panel del Organizador de la
          plataforma “ZOCO Tickets”, titularidad de ZOCO S.A.S. (en adelante, “ZOCO”).
        </p>
        <p>A los efectos de los presentes Términos:</p>
        <p>
          Se entenderá por ZOCO a ZOCO S.A.S., en su carácter de titular y prestador de la plataforma de
          venta electrónica de entradas denominada “ZOCO Tickets”, así como proveedor de servicios de
          procesamiento de pagos bajo la denominación comercial “ZOCO Servicios de Pagos”, en aquellos
          supuestos en que tales servicios se encuentren habilitados.
        </p>
        <p>
          Se considerará ORGANIZADOR a toda persona humana o jurídica que acceda y utilice el Panel para la
          gestión de eventos y/o comercialización de entradas, cualquiera sea su denominación comercial o rol
          operativo, incluyendo, sin carácter limitativo, organizadores, productores, coproductores,
          promotores, sponsors, titulares de derechos o representantes del Evento.
        </p>
        <p>El acceso y utilización del Panel se encuentra condicionado a:</p>
        <ol className="terms-alpha-list">
          <li>
            la previa suscripción del instrumento contractual que resulte aplicable conforme la naturaleza
            del servicio requerido, ya sea el Contrato Comercial de Prestación de Servicios de Venta
            Electrónica de Entradas y Procesamiento de Pagos celebrado con ZOCO, o el Acuerdo de Gestión de
            Entradas para Eventos Gratuitos;
          </li>
          <li>
            la suscripción y aprobación de la correspondiente ficha de alta, conforme el servicio contratado,
            ya sea en relación con ZOCO Servicios de Pagos y/o con la gestión de eventos gratuitos a través
            de la plataforma;
          </li>
          <li>
            el cumplimiento de los requisitos de identificación, validación y documentación exigidos por la
            normativa vigente y por las políticas internas de ZOCO.
          </li>
        </ol>
        <p>
          Cuando el ORGANIZADOR se registre exclusivamente para la creación y gestión de eventos gratuitos,
          el acceso al Panel quedará restringido a las funcionalidades vinculadas a la emisión de entradas
          sin costo y su correspondiente validación mediante códigos únicos de identificación (QR u otros
          equivalentes), quedando expresamente excluida la utilización de funcionalidades relativas a la
          comercialización de entradas y/o al procesamiento de pagos.
        </p>
        <p>
          La mera registración en el Panel no otorga derecho alguno a su utilización hasta tanto ZOCO
          confirme la aprobación del alta correspondiente.
        </p>
        <p>
          El acceso, registro y utilización del Panel implican la aceptación plena, expresa e incondicionada
          de los presentes Términos y Condiciones, así como de los instrumentos contractuales que resulten
          aplicables en función del servicio contratado, en la medida en que corresponda.
        </p>
        <p>
          El ORGANIZADOR reconoce que la aceptación electrónica de los presentes Términos producirá plenos
          efectos jurídicos y resultará plenamente vinculante.
        </p>
      </>
    ),
  },
  {
    title: "2. DEFINICIÓN Y FUNCIONALIDADES DEL PANEL",
    body: (
      <>
        <p>
          El Panel del Organizador es una herramienta tecnológica puesta a disposición por ZOCO que permite
          al ORGANIZADOR crear, configurar y administrar eventos, cargar y publicar entradas, fijar precios y
          cupos, generar entradas pagas y no pagas, incluyendo invitaciones, cortesías o emisiones manuales,
          así como consultar ventas y operaciones y acceder a información y reportes vinculados a la
          comercialización del Evento.
        </p>
        <p>
          Las entradas emitidas a través de la Plataforma se generan en formato digital con código QR para su
          validación. Dicha validación se realiza mediante la aplicación de lectura provista por ZOCO SCANNER
          B2B:
          {" "}
          <a href="https://apps.apple.com/us/app/zoco-scanner/id6758010990" target="_blank" rel="noreferrer">
            Apple
          </a>
          {" "}y{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.zoco.rnscanner"
            target="_blank"
            rel="noreferrer"
          >
            Android
          </a>
          .
        </p>
        <p>
          El ORGANIZADOR es el único y exclusivo responsable por la información que cargue y publique a
          través del Panel, incluyendo, sin limitación, fechas, horarios, precios, cantidades disponibles,
          generación de entradas gratuitas o promocionales y cualquier otro dato relativo al Evento.
        </p>
        <p>
          ZOCO no verifica ni valida el contenido ingresado por el ORGANIZADOR y no será responsable por
          errores, omisiones, inconsistencias, exceso de cupo, emisión indebida de entradas, duplicación o
          uso irregular de códigos QR, ni por fallas derivadas de dispositivos, conectividad o configuraciones
          técnicas utilizadas para la validación.
        </p>
        <p>
          La utilización del Panel y de la aplicación de lectura constituye un medio tecnológico de gestión y
          no implica participación de ZOCO en la organización, producción, control de acceso o ejecución del
          Evento, responsabilidades que permanecen bajo la exclusiva órbita del ORGANIZADOR.
        </p>
      </>
    ),
  },
  {
    title: "3. REGISTRO, ACCESO Y GESTIÓN DE USUARIOS",
    body: (
      <>
        <p>
          El acceso al Panel requiere la creación y habilitación de un usuario y contraseña, los cuales son
          personales, confidenciales e intransferibles.
        </p>
        <p>
          El ORGANIZADOR podrá habilitar subusuarios y asignar distintos perfiles o roles dentro del Panel,
          conforme las funcionalidades disponibles. En todos los casos, el ORGANIZADOR será exclusiva y
          solidariamente responsable por las acciones realizadas por los usuarios que habilite, incluyendo, sin
          limitación, la creación o modificación de eventos, emisión de entradas, generación de invitaciones,
          validación de accesos, consulta de información y cualquier otra operación realizada desde dichas
          cuentas.
        </p>
        <p>
          El ORGANIZADOR deberá resguardar la confidencialidad de las credenciales de acceso y adoptar las
          medidas necesarias para evitar su uso indebido. Toda operación realizada mediante las credenciales
          habilitadas se presumirá válida y efectuada por cuenta del ORGANIZADOR.
        </p>
        <p>
          ZOCO podrá suspender o bloquear el acceso al Panel cuando detecte uso irregular, incumplimiento de
          los presentes Términos, riesgos de seguridad o requerimientos regulatorios, sin que ello genere
          derecho a compensación alguna.
        </p>
      </>
    ),
  },
  {
    title: "4. CONFIGURACIÓN DEL EVENTO Y RESPONSABILIDAD DEL ORGANIZADOR",
    body: (
      <>
        <p>
          El ORGANIZADOR es el único responsable por la configuración del Evento a través del Panel, incluyendo
          la determinación de fechas, horarios, precios, cupos, categorías de entradas, condiciones de venta,
          políticas aplicables y cualquier modificación posterior a su publicación.
        </p>
        <p>
          En particular, el ORGANIZADOR deberá detallar y cargar de manera clara, completa y previa al inicio
          de la comercialización toda la información relevante para el consumidor, incluyendo restricciones de
          ingreso, elementos prohibidos tales como pirotecnia, dispositivos de grabación profesional,
          sustancias prohibidas, productos no autorizados u otros que determine, y cualquier otra condición
          cuyo incumplimiento pueda dar lugar al ejercicio del derecho de admisión o permanencia.
        </p>
        <p>
          El ORGANIZADOR asume las consecuencias derivadas de errores en la carga de información,
          configuraciones incorrectas, fijación de precios indebidos, exceso de cupo, cancelaciones o cambios
          realizados a través del Panel.
        </p>
        <p>
          Toda modificación realizada por el ORGANIZADOR una vez iniciada la publicación del evento podrá
          generar efectos económicos, operativos o financieros, los cuales serán exclusivamente de su
          responsabilidad.
        </p>
        <p>
          ZOCO no será responsable por decisiones comerciales adoptadas por el ORGANIZADOR ni por los
          resultados económicos derivados de la configuración o gestión del Evento a través del Panel.
        </p>
      </>
    ),
  },
  {
    chapter: "CAPÍTULO II",
    chapterTitle: "USO Y OPERACIÓN DE LA PLATAFORMA",
    title: "5. USO PERMITIDO Y PROHIBICIONES",
    body: (
      <>
        <p>
          El ORGANIZADOR se obliga a utilizar el Panel estrictamente conforme a los fines declarados al
          momento de la celebración del contrato con ZOCO, y exclusivamente para la gestión de eventos
          debidamente autorizados y habilitados, en cumplimiento de la normativa aplicable y de los presentes
          Términos y Condiciones.
        </p>
        <p>En consecuencia, queda expresamente prohibido al ORGANIZADOR:</p>
        <ol className="terms-alpha-list">
          <li>
            publicar, promocionar o gestionar eventos ilícitos o que carezcan de las autorizaciones, permisos
            o habilitaciones requeridas por la normativa vigente;
          </li>
          <li>
            establecer, modificar o configurar precios, cupos o condiciones de acceso en forma fraudulenta,
            engañosa o inconsistente con la información puesta a disposición de los asistentes;
          </li>
          <li>
            utilizar el Panel para finalidades distintas de la gestión y, en su caso, comercialización de
            entradas correspondientes al Evento;
          </li>
          <li>
            cuando el Evento haya sido declarado como gratuito y de acceso libre, comercializar, revender o
            percibir, por sí o por terceros, cualquier tipo de contraprestación económica, directa o
            indirecta, vinculada a las entradas emitidas a través de la Plataforma;
          </li>
          <li>
            interferir, intentar vulnerar o afectar, por cualquier medio, la seguridad, integridad o normal
            funcionamiento del Panel o de los sistemas asociados;
          </li>
          <li>
            reproducir, copiar, modificar, descompilar, realizar ingeniería inversa o explotar, total o
            parcialmente, el software del Panel sin autorización previa y expresa de ZOCO.
          </li>
        </ol>
        <p>
          El incumplimiento de cualquiera de las disposiciones precedentes constituirá un uso indebido de la
          Plataforma y facultará a ZOCO, a su sola discreción, a suspender, restringir o cancelar el acceso
          del ORGANIZADOR al Panel, sin perjuicio de las demás acciones contractuales, civiles o penales que
          pudieran corresponder.
        </p>
      </>
    ),
  },
  {
    title: "6. OBLIGACIONES DERIVADAS DEL CONTRATO DE EVENTOS GRATUITOS",
    body: (
      <>
        <p>
          El uso del Panel por parte del ORGANIZADOR para la creación y gestión de eventos gratuitos implica la
          aceptación y cumplimiento de las condiciones particulares establecidas para dicha modalidad, sin
          perjuicio de las demás obligaciones previstas en los presentes Términos y Condiciones.
        </p>
        <p>En particular, el ORGANIZADOR se obliga a:</p>
        <ol className="terms-alpha-list">
          <li>
            organizar, producir y llevar a cabo el Evento en los términos informados al público, siendo el
            único responsable por su realización, condiciones de acceso, seguridad y desarrollo;
          </li>
          <li>
            cumplir con la totalidad de las disposiciones legales, reglamentarias y administrativas aplicables,
            incluyendo la obtención y mantenimiento de las autorizaciones, permisos y habilitaciones necesarias
            para la realización del Evento;
          </li>
          <li>
            utilizar la Plataforma exclusivamente para la emisión y gestión de entradas gratuitas, absteniéndose
            de percibir cualquier tipo de contraprestación económica por el acceso al Evento, ya sea directa o
            indirectamente, conforme lo dispuesto en los presentes Términos;
          </li>
          <li>
            definir la cantidad de entradas disponibles en función de la capacidad habilitada del
            establecimiento y de las condiciones de seguridad del Evento, siendo responsable por cualquier
            exceso de aforo o situación derivada de una asignación inadecuada de entradas;
          </li>
          <li>
            garantizar la veracidad, integridad y actualización de la información publicada en el Panel, así
            como su adecuación a las condiciones efectivamente ofrecidas a los asistentes;
          </li>
          <li>
            otorgar a ZOCO, en la medida en que resulte razonable y posible según las características del
            Evento, espacios de visibilidad de marca, incluyendo, sin carácter limitativo, menciones,
            inclusión de logotipo, presencia en piezas gráficas o digitales, y/o espacios físicos durante el
            Evento, con fines promocionales o institucionales.
          </li>
        </ol>
        <p>
          La utilización del Panel en el marco de eventos gratuitos no implica, en ningún caso, participación
          de ZOCO en la organización, producción, ejecución o control del Evento, ni genera vínculo alguno con
          los asistentes, siendo dichas responsabilidades exclusivas del ORGANIZADOR.
        </p>
      </>
    ),
  },
  {
    title: "6.1 OBLIGACIONES DERIVADAS DEL CONTRATO COMERCIAL",
    body: (
      <>
        <p>
          El uso del Panel y de la Plataforma por parte del ORGANIZADOR implica el íntegro cumplimiento del
          Contrato Comercial de Prestación de Servicios de Venta Electrónica de Entradas y Procesamiento de
          Pagos celebrado con ZOCO.
        </p>
        <p>
          En especial, y sin carácter limitativo, el ORGANIZADOR reconoce que la utilización del Panel
          comprende el cumplimiento de las siguientes obligaciones contractuales:
        </p>
        <ol className="terms-alpha-list">
          <li>
            La organización, producción, habilitación y realización del Evento en los términos en que haya sido
            ofrecido comercialmente al público, debiendo cumplir íntegramente con la oferta realizada a los
            consumidores.
          </li>
          <li>
            El cumplimiento de todos los recaudos legales, autorizaciones, permisos y habilitaciones exigidos
            por la normativa aplicable para la realización del Evento.
          </li>
          <li>
            El otorgamiento y mantenimiento, durante toda la vigencia del vínculo contractual, de las
            autorizaciones necesarias para que ZOCO pueda utilizar la marca, nombre comercial, logotipos,
            denominación del Evento, identidad visual y demás signos distintivos del ORGANIZADOR y/o del
            Evento, así como material gráfico y promocional vinculado al mismo, en los términos previstos en
            el Contrato Comercial.
          </li>
          <li>
            La cesión de espacios publicitarios, sin costo alguno para ZOCO, tanto en las instancias previas
            de promoción como durante la realización del Evento, en soportes físicos y digitales vinculados al
            mismo, a fin de permitir la difusión de su marca, logotipo, slogan, material audiovisual o mensajes
            institucionales, conforme lo establecido en el Contrato Comercial.
          </li>
          <li>
            La concesión irrevocable del material fotográfico y audiovisual generado en el Evento, en los
            términos y alcances previstos en el Contrato Comercial.
          </li>
          <li>
            La responsabilidad por la cancelación, suspensión o reprogramación del Evento, incluyendo las
            consecuencias económicas, comerciales y legales derivadas de tales circunstancias.
          </li>
          <li>
            El cumplimiento de los beneficios y contraprestaciones acordados a favor de ZOCO como condición
            del uso de la Plataforma.
          </li>
        </ol>
        <p>
          Las obligaciones precedentemente enumeradas se regirán por lo dispuesto en el Contrato Comercial, el
          cual prevalecerá en caso de contradicción.
        </p>
      </>
    ),
  },
  {
    title: "7. LIQUIDACIONES Y PAGOS",
    body: (
      <>
        <p>
          Todo lo relativo a comisiones, liquidaciones, acreditaciones, plazos de pago, retenciones,
          compensaciones, reversiones, contracargos y demás aspectos económicos vinculados a la comercialización
          de entradas se regirá por lo dispuesto en:
        </p>
        <ol className="terms-alpha-list">
          <li>
            el Contrato Comercial de Prestación de Servicios de Venta Electrónica de Entradas y Procesamiento
            de Pagos celebrado entre las partes; y
          </li>
          <li>
            los Términos y Condiciones Generales de ZOCO Servicios de Pagos y sus anexos vigentes.
          </li>
        </ol>
        <p>En caso de contradicción, prevalecerá lo establecido en el Contrato Comercial.</p>
      </>
    ),
  },
  {
    title: "8. RÉGIMEN DE EMISIÓN Y ESCANEO DE ENTRADAS",
    body: (
      <>
        <p>
          Las entradas emitidas a través de la Plataforma se generan en formato digital con código QR para su
          validación electrónica.
        </p>
        <p>
          La acreditación y control de acceso al Evento se realiza mediante la aplicación “ZOCO Scanner B2B”,
          la cual deberá ser descargada y utilizada por el ORGANIZADOR o por el personal que éste designe, a
          fin de proceder al escaneo y validación de las entradas.
        </p>
        <p>
          El ORGANIZADOR es responsable por la correcta utilización de la aplicación, la designación del
          personal autorizado y la adecuada gestión del control de acceso durante el Evento.
        </p>
        <p>
          ZOCO no será responsable por fallas derivadas del uso de dispositivos inadecuados, problemas de
          conectividad, errores operativos del personal del ORGANIZADOR o decisiones adoptadas por éste en el
          proceso de acreditación.
        </p>
      </>
    ),
  },
  {
    chapter: "CAPÍTULO III",
    chapterTitle: "RÉGIMEN JURÍDICO Y OPERATIVO",
    title: "9. PROPIEDAD INTELECTUAL",
    body: (
      <>
        <p>
          El Panel, la Plataforma “ZOCO Tickets”, su diseño, estructura, código fuente, software, bases de
          datos, funcionalidades y demás elementos que lo integran son de titularidad exclusiva de ZOCO y se
          encuentran protegidos por la normativa aplicable en materia de propiedad intelectual.
        </p>
        <p>
          El acceso y uso del Panel no otorga al ORGANIZADOR derecho alguno de propiedad, licencia implícita
          ni autorización distinta al uso limitado y no exclusivo previsto en los presentes Términos.
        </p>
        <p>
          Cualquier uso no autorizado, reproducción, modificación, distribución o explotación del Panel o de
          sus componentes constituirá una violación a los derechos de propiedad intelectual de ZOCO, quedando
          ésta facultada a ejercer las acciones civiles, comerciales y/o penales que pudieran corresponder
          conforme la normativa vigente.
        </p>
      </>
    ),
  },
  {
    title: "10. PROTECCIÓN DE DATOS PERSONALES",
    body: (
      <>
        <p>
          ZOCO tratará los datos personales conforme la normativa vigente en la República Argentina y sus
          políticas de privacidad aplicables.
        </p>
        <p>
          El ORGANIZADOR será responsable por el tratamiento y uso posterior que realice de la información
          obtenida a través del Panel, debiendo cumplir con la Ley N° 25.326 y demás normativa aplicable en
          materia de protección de datos personales.
        </p>
        <p>
          En particular, el ORGANIZADOR deberá adecuar el tratamiento de los datos personales a las
          finalidades y usos declarados por ZOCO en su Política de Privacidad, no pudiendo destinarlos a
          finalidades distintas sin contar previamente con base legal suficiente y, en su caso, con el
          consentimiento informado del titular de los datos.
        </p>
        <p>
          En caso de pretender utilizar los datos para finalidades diferentes a las originalmente informadas,
          el ORGANIZADOR deberá notificar previamente al titular del dato personal y cumplir íntegramente con
          las exigencias legales aplicables.
        </p>
        <p>
          El ORGANIZADOR asume la responsabilidad por el resguardo, confidencialidad y seguridad de los datos
          a los que acceda y por su utilización conforme a las finalidades legítimas vinculadas al Evento.
        </p>
      </>
    ),
  },
  {
    title: "11. SUSPENSIÓN, RESTRICCIÓN O CANCELACIÓN DEL ACCESO",
    body: (
      <>
        <p>
          ZOCO podrá suspender, restringir o cancelar el acceso al Panel, total o parcialmente, cuando:
        </p>
        <ol className="terms-alpha-list">
          <li>exista incumplimiento de los presentes Términos o del Contrato Comercial;</li>
          <li>se detecten niveles de contracargos que representen un riesgo operativo o financiero;</li>
          <li>se verifiquen riesgos regulatorios o requerimientos de autoridades competentes;</li>
          <li>medie orden judicial o administrativa;</li>
          <li>existan indicios razonables de uso indebido, fraude o afectación a la seguridad del sistema.</li>
        </ol>
        <p>La suspensión podrá mantenerse mientras subsistan las causas que la motivaron.</p>
      </>
    ),
  },
  {
    title: "12. INTEGRACIÓN CONTRACTUAL Y PRELACIÓN NORMATIVA",
    body: (
      <>
        <p>Los presentes Términos se integran con:</p>
        <ol className="terms-alpha-list">
          <li>el Contrato Comercial celebrado entre ZOCO y el ORGANIZADOR;</li>
          <li>los Términos y Condiciones Generales de ZOCO Servicios de Pagos y sus anexos vigentes.</li>
        </ol>
        <p>En caso de contradicción, prevalecerá lo expresamente establecido en el Contrato Comercial.</p>
      </>
    ),
  },
  {
    title: "13. INDEMNIDAD POR EL USO DEL PANEL",
    body: (
      <>
        <p>
          El ORGANIZADOR se obliga a mantener indemne y a resarcir a ZOCO S.A.S., sus socios, representantes,
          empleados y colaboradores, frente a cualquier reclamo, acción administrativa o judicial, sanción,
          multa, daño, costo o gasto, incluyendo honorarios profesionales razonables, que tenga origen en:
        </p>
        <ol className="terms-alpha-list">
          <li>la información cargada, publicada o modificada a través del Panel;</li>
          <li>la configuración del Evento, fijación de precios, cupos o condiciones de venta;</li>
          <li>la emisión de entradas pagas o gratuitas, invitaciones o códigos QR;</li>
          <li>
            el uso del Panel o de las herramientas de validación por parte del ORGANIZADOR o de los usuarios
            por él habilitados;
          </li>
          <li>el tratamiento de datos personales realizado por el ORGANIZADOR;</li>
          <li>el incumplimiento de la normativa aplicable al Evento;</li>
          <li>la cancelación, suspensión o reprogramación del Evento.</li>
        </ol>
        <p>
          La presente obligación de indemnidad resultará aplicable cuando el reclamo tenga origen directo o
          indirecto en hechos, actos u omisiones del ORGANIZADOR, sus socios, empleados, dependientes,
          contratistas, subcontratistas, productores asociados, personal afectado al Evento o usuarios
          habilitados en el Panel, aun cuando dichos reclamos se dirijan formalmente contra ZOCO.
        </p>
      </>
    ),
  },
  {
    title: "14. MODIFICACIONES",
    body: (
      <>
        <p>
          ZOCO podrá modificar los presentes Términos mediante su publicación en el sitio web institucional o
          en el propio Panel.
        </p>
        <p>
          La continuidad en el uso del Panel con posterioridad a la publicación de las modificaciones implicará
          la aceptación de las mismas.
        </p>
      </>
    ),
  },
  {
    title: "15. LEY APLICABLE Y JURISDICCIÓN",
    body: (
      <>
        <p>Los presentes Términos se regirán por las leyes de la República Argentina.</p>
        <p>
          Toda controversia derivada de su interpretación o ejecución será sometida a la jurisdicción de los
          Tribunales Ordinarios de la Provincia de Tucumán, con renuncia expresa a cualquier otro fuero o
          jurisdicción que pudiera corresponder.
        </p>
      </>
    ),
  },
];

export default function OrganizerTermsPage() {
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
          <span className="terms-pill">Panel del Organizador</span>
          <h1 className="terms-title">Términos y Condiciones de Uso</h1>
          <p className="terms-subtitle">TÉRMINOS Y CONDICIONES DE USO DEL PANEL DEL ORGANIZADOR</p>
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

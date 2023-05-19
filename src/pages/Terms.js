import React from "react";
import Link from "next/link";

const Terms = () => {
  return (
    <div className="general-terms">
      <Link href="/">
        <button>Volver</button>
      </Link>
      <div className="main-terms">
        <div className="terminos">
          <h3>Términos y Condiciones de Uso de Aducion</h3>
          <br />
          <p>
            Por favor, lea detenidamente los siguientes Términos y Condiciones
            antes de utilizar el sitio web de Aducion. Estos términos establecen
            los derechos y obligaciones legales entre usted (el "Usuario") y
            Aducion ("nosotros", "nuestro/a" o "la empresa") con respecto al uso
            de nuestro sitio web. Al acceder y utilizar el sitio web de Aducion,
            usted acepta estar sujeto a estos términos y condiciones.
          </p>
          <br />
          <h2>1.Uso del sitio web</h2>
          <br />
          <p>
            1.1. Contenido del sitio web: El contenido del sitio web de Aducion
            se proporciona únicamente con fines informativos. Usted reconoce que
            la información y los materiales presentados en el sitio web pueden
            contener errores, inexactitudes o estar desactualizados, y renuncia
            a cualquier reclamación relacionada con dichos errores o
            inexactitudes.
            <br />
            1.2. Uso autorizado: Usted se compromete a utilizar el sitio web de
            Aducion únicamente para fines legales y de acuerdo con estos
            términos y condiciones. Queda prohibido cualquier uso del sitio web
            que pueda infringir los derechos de propiedad intelectual de
            terceros, causar daño a la empresa o a otros usuarios, o violar
            cualquier ley aplicable. <br />
            1.3. Cuentas de usuario: Al utilizar el sitio web de Aducion, es
            posible que se le solicite crear una cuenta de usuario. Usted es
            responsable de mantener la confidencialidad de su cuenta y de todas
            las actividades que ocurran bajo su nombre de usuario y contraseña.
            Usted acepta notificar de inmediato a Aducion sobre cualquier uso no
            autorizado de su cuenta o cualquier otra brecha de seguridad.
          </p>
          <br />
          <h2>2.Propiedad intelectual</h2>
          <br />
          <p>
            2.1. Derechos de propiedad: El sitio web de Aducion y su contenido,
            incluyendo pero no limitado a textos, gráficos, logotipos, imágenes,
            videos, software y código fuente, están protegidos por derechos de
            propiedad intelectual y le pertenecen a Aducion o a sus
            licenciantes. Usted acepta no copiar, reproducir, modificar,
            distribuir, transmitir, exhibir, vender ni utilizar de ninguna
            manera el contenido sin el consentimiento previo por escrito de
            Aducion. <br />
            2.2. Marcas comerciales: Las marcas comerciales, logotipos y nombres
            comerciales utilizados en el sitio web de Aducion son propiedad de
            la empresa o de terceros, y no se otorga ningún derecho o licencia
            para utilizarlos sin el consentimiento previo por escrito del
            titular.
          </p>
          <br />
          <h2>3.Limitación de responsabilidad</h2>
          <br />
          <p>
            3.1. Uso bajo su propio riesgo: Usted utiliza el sitio web de
            Aducion bajo su propio riesgo. La empresa no garantiza la
            disponibilidad continua, la funcionalidad o la precisión del sitio
            web. La empresa no se hace responsable de los daños directos,
            indirectos, incidentales, especiales, consecuentes o punitivos que
            puedan surgir del uso o la incapacidad de utilizar el sitio web.{" "}
            <br />
            3.2. Enlaces a terceros: El sitio web de Aducion puede contener
            enlaces a sitios web de terceros. Estos enlaces se proporcionan
            únicamente para su conveniencia, y la empresa no avala ni es
            responsable del contenido, las políticas de privacidad ni las
            prácticas de los sitios
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

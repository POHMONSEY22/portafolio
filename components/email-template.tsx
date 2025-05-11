import type React from "react"
interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, subject, message }) => (
  <div>
    <h1>Nuevo mensaje de contacto</h1>
    <p>Has recibido un nuevo mensaje de contacto desde tu portfolio.</p>

    <h2>Detalles del mensaje:</h2>
    <ul>
      <li>
        <strong>Nombre:</strong> {name}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Asunto:</strong> {subject}
      </li>
    </ul>

    <h2>Mensaje:</h2>
    <p>{message}</p>

    <hr />
    <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
  </div>
)

import emailjs from 'emailjs-com'

export const sendEmail = (name: string, email: string, message: string) => {
  const serviceId = 'service_2ygdbhf'
  const templateId = 'template_eq2jo8k'
  const publicKey = 'jzTD_LZLlIba6kNTy'

  // Define the template params
  const templateParams = {
    name,
    email,
    message,
  }

  // Send the email
  return emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      return { status: 'success', message: 'Email sent successfully' }
    })
    .catch((error) => {
      console.log('FAILED...', error)
      return { status: 'error', message: 'Email failed to send' }
    })
}

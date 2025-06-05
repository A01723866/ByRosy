# Configuración de EmailJS para formularios de contacto en ByRosy

Para activar el envío de emails desde el formulario de contacto, sigue estos pasos:

## 1. Crear una cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/) y regístrate para obtener una cuenta gratuita
2. El plan gratuito permite enviar hasta 200 emails al mes

## 2. Configurar un servicio de email

1. En el dashboard de EmailJS, ve a 'Email Services'
2. Haz clic en 'Add New Service'
3. Selecciona el proveedor de email que quieras usar (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. Una vez conectado, anota el 'Service ID' (ya tenemos configurado: service_1eal0tv)

## 3. Crear una plantilla de email

1. Ve a 'Email Templates'
2. Haz clic en 'Create New Template'
3. Puedes seleccionar la plantilla pre-construida 'Contact Us'
4. Personaliza el tema y contenido de la plantilla según tus necesidades
5. Asegúrate de configurar correctamente los siguientes campos:
   - **To Email**: El correo donde quieres recibir las notificaciones (el de Rosy)
   - **From Name**: Usa `{{from_name}}` para que muestre el nombre del cliente
   - **Reply-To**: Usa `{{from_email}}` para poder responder directamente al cliente
6. En el contenido del correo, asegúrate de incluir TODAS las variables que necesitas:
   ```
   Nombre: {{name}}
   Email: {{email}}
   Teléfono: {{phone}}
   Fecha: {{time}}
   Mensaje: {{message}}
   ```
7. Guarda la plantilla y anota el 'Template ID' (ya tenemos configurado: template_0giz0yj)

## 4. Revisar y editar la plantilla existente

Si el correo no muestra todos los campos que esperas, debes revisar tu plantilla:

1. Ve a 'Email Templates'
2. Selecciona el template_0giz0yj
3. En el contenido del correo, verifica que TODAS las variables están incluidas:
   ```
   Nombre: {{name}}
   Email: {{email}}
   Teléfono: {{phone}}
   Fecha: {{time}}
   Mensaje: {{message}}
   ```
4. Guarda los cambios

## 5. Obtener tu clave pública de API

1. Ve a 'Account' > 'API Keys'
2. Copia tu 'Public Key' (ya tenemos configurado: bmCsAVRUy8IyOpEpc)

## 6. Actualizar el código del sitio web

1. En el archivo `src/pages/index.astro`, la clave pública ya está configurada:
   ```javascript
   emailjs.init({
     publicKey: "bmCsAVRUy8IyOpEpc",
   });
   ```

## 7. Probar el formulario

1. Ve al sitio web y completa el formulario de contacto
2. Verifica que el email se envíe correctamente a tu bandeja de entrada
3. Confirma que todos los campos (nombre, email, teléfono, mensaje) aparecen en el correo

## Solución de problemas comunes

- **Faltan campos en el correo**: Revisa la plantilla en EmailJS y asegúrate de que incluye todos los campos necesarios
- **Error "The public key is required"**: Asegúrate de que la clave pública esté correctamente configurada
- **Error "Service ID not found"**: Verifica que el service_1eal0tv esté activo en tu cuenta
- **Error "Template ID not found"**: Verifica que template_0giz0yj esté correctamente configurado en tu cuenta
- **Los emails no llegan**: Verifica la carpeta de spam o correo no deseado
- **Error de CORS**: Esto puede ocurrir en desarrollo local. Prueba en un servidor web real
- **Error de conexión**: Asegúrate de tener una conexión a internet estable 
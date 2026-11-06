# Fontanería Chacón — Flow / Water Systems

Rediseño local completo en HTML5, CSS3, JavaScript vanilla y SVG, sin dependencias de ejecución ni compilación. Apertura con Live Server.

## Información utilizada

El encargo actualizado confirma el nombre Fontanería Chacón, clasifica la actividad como fontanería y facilita el teléfono 608 44 37 06. Todos los enlaces de llamada usan `tel:+34608443706`.

La versión anterior reservaba el contacto y la actividad por falta de confirmación. El nuevo encargo proporciona expresamente esos datos, que ahora se muestran. No se ha realizado una verificación independiente con el titular. Dirección, servicios concretos, horarios y zona de cobertura siguen sin confirmar y no se publican. No se añaden WhatsApp, correo, redes sociales, urgencias, precios, presupuestos gratuitos, experiencia, certificaciones, testimonios ni proyectos realizados.

## Diseño

Composición fotográfica a todo el ancho, titular sobre la imagen, cobre como acento, navegación y llamadas accesibles, sección editorial de presentación, recorrido SVG interactivo, estudio de materiales y contacto final. La identidad se diferencia de Construcciones Cañino: tipografía abierta, formas redondeadas, cobre y trayectorias fluidas, sin retículas arquitectónicas ni bloques tipográficos condensados.

Paleta: #123D4A, #F5F5F0, #B8734D, #7C8588 y #20272A. Se usan tonos derivados más oscuros o claros del cobre cuando el texto pequeño necesita contraste. Space Grotesk variable local para texto y titulares, fuente Google Fonts: https://github.com/google/fonts/tree/main/ofl/spacegrotesk. Licencia SIL OFL conservada en `assets/fonts/OFL-SpaceGrotesk.txt`. No se realizan solicitudes de fuente o imágenes a terceros al visitar la página.

## Fotografía y recursos

Dos imágenes generadas con la herramienta integrada `image_gen`: tuberías, válvula y uniones de cobre para la portada; llave ajustable, cortatubos y piezas de cobre para el estudio de materiales. Revisadas visualmente en cuanto a proporciones y coherencia de las piezas. No son documentación técnica ni instalaciones de la empresa. Ambas llevan pies explícitos de fotografía ilustrativa sin atribuir trabajos o herramientas al negocio; no se repiten imágenes.

Originales conservados en `assets/images/originals/`. JPEG optimizados: `copper-system-768.jpg`, `copper-system-1536.jpg`, `tools-copper-600.jpg` y `tools-copper-1024.jpg`. Prompts completos, modo y correspondencias en `qa/image-generation-prompts.json`. Logo gráfico, favicon y recorrido en SVG originales.

El botón «Destacar recorrido» activa o desactiva el trazo y actualiza `aria-pressed` y un estado anunciado. El trazo solo se anima al activarlo, sin movimiento continuo. Se conserva el carácter decorativo de la interacción y se indica que no representa una instalación real. Revelados ligeros, foco en destinos internos, respeto a `prefers-reduced-motion` y contenido legible sin JavaScript.

## Validación

Desde `Landing webs`: `node fontaneria-chacon/qa/browser-check.mjs` (Chrome instalado en la ruta estándar de Windows). Resultados y capturas en `qa/`.

Chrome headless a 375, 390, 768, 1440 y 1920 px: sin scroll horizontal, imágenes y fuente local cargadas, un H1, exactamente una etiqueta `noindex, nofollow` dentro de head, anclas presentes, navegación y foco por tabulador. Recorrido activado y desactivado mediante barra espaciadora, estado accesible, trazo y conservación del icono comprobados. Interacciones con movimiento reducido; lectura sin JavaScript y ausencia de animaciones con esa preferencia comprobadas. Botones principales de al menos 44 px de alto. Sin excepciones de JavaScript detectadas; sintaxis comprobada con `node --check`. Teléfonos revisados por formato, sin realizar llamadas. Revisión visual de fotografías y capturas de móvil y escritorio.

Las otras 13 carpetas se comparan por SHA-256 con el estado inicial. No se han hecho commits, pushes, publicación ni cambios globales. No se ha probado Safari ni un iPhone físico. Siguen pendientes de confirmación con el negocio la dirección, los servicios concretos y los horarios, sin bloquear el rediseño solicitado.

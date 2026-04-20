export const profile = {
  fullName: "Fernando Thiele",
  email: "fnandothiele@gmail.com",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/fnandoth/",
  github: "https://github.com/fnandoth",
  summary:
    "Desarrollador junior con experiencia en C#, APIs y procesamiento de datos en entornos de software mantenible. He trabajado en microservicios y despliegues consistentes, con foco en trazabilidad tecnica, calidad de codigo y colaboracion con equipos multidisciplinarios. Me interesa profundizar en soluciones escalables para operaciones digitales.",
  headline: "Junior Backend Developer especializado en .NET y microservicios",
  exitStory:
    "Perfil junior con experiencia real desarrollando sistemas de microservicios con ASP.NET Core y despliegue con Docker. Interes en sistemas escalables y analisis de datos.",
  roles: [
    "Junior Backend Developer (.NET)",
    "Junior Software Engineer Backend"
  ],
  superpowers: [
    "Desarrollo de APIs con ASP.NET Core",
    "Arquitectura de microservicios",
    "Aprendizaje rapido y adaptacion tecnologica",
    "Desarrollo de aplicaciones web con React y Next.js"
  ],
  projects: [
    {
      name: "Sistema de RRHH (Microservicios)",
      kind: "experience",
      heroMetric: "Arquitectura distribuida implementada con ASP.NET Core",
      techStack: ["ASP.NET Core", "Docker", "PostgreSQL", "RabbitMQ"],
      description:
        "Participacion en un sistema de RRHH en entorno laboral real, aplicando arquitectura de microservicios, despliegue con Docker y comunicacion asincrona para soportar modulos desacoplados."
    },
    {
      name: "Fungus - Reproductor Musical",
      kind: "project",
      heroMetric: "Arquitectura desacoplada (Next.js + Tauri)",
      techStack: ["Next.js", "Tauri"],
      repo: "https://github.com/fnandoth/Fungus",
      description:
        "Aplicacion musical con Tauri, React y TypeScript para gestionar biblioteca, crear playlists y reproducir canciones con shuffle, repeticion y control de volumen. Integra yt-dlp para enlaces en linea."
    },
    {
      name: "BG - Red Social",
      kind: "project",
      heroMetric: "Redes sociales con ASP.NET Core y React",
      techStack: ["ASP.NET Core", "React", "PostgreSQL", "Docker", "RabbitMQ"],
      repo: "https://github.com/fnandoth/BG",
      description:
        "Red social con perfiles, publicaciones y conexiones entre usuarios, desarrollada con ASP.NET Core y React bajo enfoque de microservicios y despliegue en Docker."
    },
    {
      name: "MCSync - Sincronizacion de Archivos relacionada a Minecraft",
      kind: "project",
      heroMetric: "Sincronizacion de archivos con .NET",
      techStack: ["ASP.NET Core", "Windows Forms"],
      url: "https://mcsync.fnandothiele.workers.dev/",
      repo: "https://github.com/fnandoth/MCSync",
      description:
        "Aplicacion .NET que automatiza la sincronizacion de mundos de Minecraft usando GitHub como repositorio central, permitiendo compartir un mismo estado del mundo sin transferencias manuales ni perdida de datos.",
      extendedDescription:
        "MCSync resuelve la rotacion de host entre amigos con un modelo single-writer + lease. Coordina quien puede hostear, descarga el snapshot mas reciente cuando corresponde y al finalizar publica una nueva version consistente del mundo. Incluye dashboard para operacion diaria y flujo end-to-end funcional.",
      highlights: [
        "Coordinacion de lease remoto y control de estado para evitar conflictos de escritura.",
        "Ciclo completo: iniciar host, sincronizar, detener, comprimir y publicar snapshot.",
        "Integracion con server.jar y playit-cli para operacion real de servidores."
      ],
      screenshots: [
        "/screenshots/mcsync/config.png",
        "/screenshots/mcsync/configCompleted.png",
        "/screenshots/mcsync/dashboard.png",
        "/screenshots/mcsync/dashboardSync.png"
      ]
    }
  ]
};

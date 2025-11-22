import { MetricData, MetricCategory, CardTheme } from './types';

export const METRICS_DATA: MetricData[] = [
  {
    id: 'conversion-rate',
    name: 'Conversion Rate',
    shortDescription: 'Una métrica de UX para el crecimiento y el impacto empresarial.',
    definition: '% de usuarios que completan una acción deseada (ej. registro, compra, donación).',
    goalConnection: 'Impulsa directamente los ingresos, la adquisición de clientes y el crecimiento del producto.',
    researchMethods: 'Analíticas, tests A/B o multivariante, análisis de cohortes.',
    formula: '(Conversiones / Total Visitantes) × 100',
    example: 'Si 50 de cada 1,000 visitantes compran un producto, la tasa es del 5%.',
    categories: [MetricCategory.BUSINESS, MetricCategory.BEHAVIORAL],
    theme: CardTheme.CREAM
  },
  {
    id: 'sus',
    name: 'System Usability Scale',
    acronym: 'SUS',
    shortDescription: 'Una métrica de UX para la usabilidad percibida.',
    definition: 'Cuestionario estandarizado de 10 ítems, puntuado de 0 a 100, que mide la facilidad de uso.',
    goalConnection: 'Valida mejoras de usabilidad y establece puntos de referencia a lo largo del tiempo.',
    researchMethods: 'Encuesta post-test de usabilidad, benchmarking comparativo entre versiones.',
    formula: 'Σ(Puntuaciones ajustadas) × 2.5',
    example: 'Un puntaje de 80 es grado A (Excelente), mientras que 68 es el promedio.',
    categories: [MetricCategory.USABILITY, MetricCategory.ATTITUDINAL],
    theme: CardTheme.LAVENDER
  },
  {
    id: 'completion-rate',
    name: 'Completion Rate',
    shortDescription: 'Una métrica de UX para la eficiencia y el éxito.',
    definition: '% de usuarios que terminan una tarea que iniciaron siguiendo un camino definido.',
    goalConnection: 'Una mayor finalización reduce los abandonos en flujos de autoservicio y la dependencia del soporte.',
    researchMethods: 'Analíticas (embudos, seguimiento de eventos), pruebas A/B, análisis de tareas.',
    formula: '(Tareas Completadas / Tareas Iniciadas) × 100',
    example: 'De 200 usuarios que inician el registro, 150 terminan. Tasa: 75%.',
    categories: [MetricCategory.USABILITY, MetricCategory.BEHAVIORAL],
    theme: CardTheme.CREAM
  },
  {
    id: 'error-rate',
    name: 'User Error Rate',
    shortDescription: 'Frecuencia de errores durante una tarea.',
    definition: 'Porcentaje de entradas erróneas, clics incorrectos o acciones fallidas por parte del usuario.',
    goalConnection: 'Identifica áreas confusas de la interfaz y previene la frustración del usuario.',
    researchMethods: 'Pruebas de usabilidad observadas, análisis de logs de errores.',
    formula: '(Total Errores / Total Intentos de Tarea) × 100',
    example: 'Si en 100 intentos de login ocurren 10 errores de contraseña, la tasa es 10%.',
    categories: [MetricCategory.USABILITY, MetricCategory.BEHAVIORAL],
    theme: CardTheme.PEACH
  },
  {
    id: 'csat',
    name: 'Satisfaction Rate',
    acronym: 'CSAT',
    shortDescription: 'Una métrica de UX para la calidad de la experiencia.',
    definition: 'Calificaciones de experiencia de los usuarios (ej. escala 1-5) tras una interacción específica.',
    goalConnection: 'Construye lealtad, fomenta el uso repetido y reduce la fricción percibida.',
    researchMethods: 'Encuestas de feedback del cliente, encuestas post-tarea en sesiones de usabilidad.',
    formula: '(Respuestas Positivas / Total Respuestas) × 100',
    example: 'Si 80 de 100 usuarios califican con 4 o 5 estrellas, el CSAT es 80%.',
    categories: [MetricCategory.ATTITUDINAL],
    theme: CardTheme.LAVENDER
  },
  {
    id: 'retention-rate',
    name: 'Retention Rate',
    shortDescription: 'Capacidad del producto para mantener usuarios activos.',
    definition: 'Porcentaje de usuarios que siguen usando el producto después de un periodo de tiempo específico.',
    goalConnection: 'Indicador clave de "Product-Market Fit" y valor a largo plazo.',
    researchMethods: 'Análisis de cohortes, logs de actividad de usuarios.',
    formula: '((Usuarios al Final - Nuevos Usuarios) / Usuarios al Inicio) × 100',
    example: 'De 100 usuarios iniciales, 60 siguen activos al final del mes. Retención: 60%.',
    categories: [MetricCategory.BUSINESS, MetricCategory.BEHAVIORAL],
    theme: CardTheme.SKY
  },
  {
    id: 'nps',
    name: 'Net Promoter Score',
    acronym: 'NPS',
    shortDescription: 'Medida de lealtad y entusiasmo del cliente.',
    definition: 'Mide la probabilidad de recomendar un producto en una escala de 0 a 10.',
    goalConnection: 'Predice el crecimiento orgánico y la retención a largo plazo.',
    researchMethods: 'Encuestas por correo electrónico, pop-ups in-app, entrevistas de seguimiento.',
    formula: '% Promotores (9-10) - % Detractores (0-6)',
    example: '50% Promotores - 10% Detractores = NPS 40.',
    categories: [MetricCategory.BUSINESS, MetricCategory.ATTITUDINAL],
    theme: CardTheme.SKY
  },
  {
    id: 'ces',
    name: 'Customer Effort Score',
    acronym: 'CES',
    shortDescription: 'Esfuerzo percibido para resolver un problema.',
    definition: 'Mide cuánto esfuerzo tuvo que realizar el usuario para completar una acción o resolver una duda.',
    goalConnection: 'Reducir el esfuerzo es un predictor más fuerte de lealtad que la satisfacción en servicios.',
    researchMethods: 'Encuesta inmediata post-interacción ("¿Qué tan fácil fue...?").',
    formula: 'Promedio de puntuaciones (Escala 1-5 o 1-7)',
    example: 'Promedio de 4.2 en una escala de 5 indica bajo esfuerzo (bueno).',
    categories: [MetricCategory.ATTITUDINAL, MetricCategory.USABILITY],
    theme: CardTheme.LAVENDER
  },
  {
    id: 'time-on-task',
    name: 'Time on Task',
    shortDescription: 'Eficiencia en la finalización de flujos.',
    definition: 'El tiempo promedio que tarda un usuario en completar con éxito una tarea predefinida.',
    goalConnection: 'Identifica fricciones en la interfaz y mejora la productividad del usuario.',
    researchMethods: 'Pruebas de usabilidad moderadas/no moderadas, grabación de sesiones.',
    formula: 'Σ(Tiempo Tarea) / Total Usuarios',
    example: 'Si 3 usuarios tardan 30s, 40s y 50s, el promedio es 40s.',
    categories: [MetricCategory.USABILITY, MetricCategory.BEHAVIORAL],
    theme: CardTheme.MINT
  },
  {
    id: 'churn-rate',
    name: 'Churn Rate',
    shortDescription: 'Tasa de abandono de clientes.',
    definition: 'Porcentaje de clientes que dejan de usar el producto en un periodo determinado.',
    goalConnection: 'Crítico para la salud del negocio; indica problemas graves de UX o valor.',
    researchMethods: 'Análisis de cohortes, entrevistas de salida, análisis predictivo.',
    formula: '(Clientes Perdidos / Clientes Iniciales) × 100',
    example: 'Si empiezas con 100 clientes y pierdes 5 en un mes, Churn = 5%.',
    categories: [MetricCategory.BUSINESS, MetricCategory.BEHAVIORAL],
    theme: CardTheme.PEACH
  },
  {
    id: 'adoption-rate',
    name: 'Adoption Rate',
    shortDescription: 'Velocidad con la que los usuarios usan nuevas funciones.',
    definition: 'Porcentaje de usuarios nuevos o existentes que comienzan a usar una función o producto.',
    goalConnection: 'Mide el éxito de lanzamientos, el onboarding y la relevancia de nuevas features.',
    researchMethods: 'Analítica de producto (Mixpanel, Amplitude), tracking de eventos.',
    formula: '(Nuevos Usuarios Activos / Total Usuarios Potenciales) × 100',
    example: 'Si lanzas una función y 200 de 1000 usuarios la usan, la adopción es 20%.',
    categories: [MetricCategory.BUSINESS, MetricCategory.BEHAVIORAL],
    theme: CardTheme.CREAM
  },
  {
    id: 'lostness',
    name: 'Lostness Metric',
    shortDescription: 'Eficiencia de navegación del usuario.',
    definition: 'Medida de qué tan "perdido" está un usuario comparando el camino óptimo vs el camino real.',
    goalConnection: 'Identifica arquitecturas de información confusas y flujos de navegación pobres.',
    researchMethods: 'Pruebas de usabilidad con tracking de ruta.',
    formula: 'L = √((N/S - 1)² + (R/N - 1)²)',
    example: 'L varía de 0 (perfecto) a 1. Un valor > 0.4 indica que el usuario está perdido.',
    categories: [MetricCategory.USABILITY, MetricCategory.BEHAVIORAL],
    theme: CardTheme.MINT
  },
  {
    id: 'seq',
    name: 'Single Ease Question',
    acronym: 'SEQ',
    shortDescription: 'Dificultad percibida inmediata.',
    definition: 'Una única pregunta post-tarea: "¿Qué tan difícil fue esta tarea?" (Escala 1-7).',
    goalConnection: 'Diagnóstico rápido de problemas específicos en flujos complejos.',
    researchMethods: 'Pruebas de usabilidad, intercepción contextual.',
    formula: 'Promedio de calificaciones (Escala 1-7)',
    example: 'Un promedio de 5.5 o superior suele considerarse bueno.',
    categories: [MetricCategory.USABILITY, MetricCategory.ATTITUDINAL],
    theme: CardTheme.CREAM
  }
];

export const CATEGORIES = Object.values(MetricCategory);
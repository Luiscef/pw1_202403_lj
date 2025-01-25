const demoPlanEstudio = [
    {
        "id": 1,
        "bloque": "I",
        "asignaturas": [
            {
                "id": "ES101",
                "nombre": "ESPAÑOL",
                "creditos": 3,
                "orden": 0,
            },
            {
                "id": "MT101",
                "nombre": "MATEMÁTICAS",
                "creditos": 4,
                "orden": 1,
            },
            {
                "id": 'SC101',
                "nombre": "SOCIOLOGIA",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'FI101',
                "nombre": "FILOSOFIA",
                "creditos": 3,
                "orden": 3
            },
            {
                "id": 'IF112',
                "nombre": "INTRODUCCIÓN A LAS CIENCIAS DE LA COMPUTACIÓN",
                "creditos": 3,
                "orden": 4
            },
            {
                "id": 'ESVU1',
                "nombre": "SEMINARIO DE INICIACIÓN",
                "creditos": 0,
                "orden": 5
            },
        ]
    },
    {
        "id": 2,
        "bloque": "II",
        "asignaturas": [
            {
                "id": "ES201",
                "nombre": "EXPRESIÓN ORAL Y ESCRITA",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['ES101']
            },
            {
                "id": "MT201",
                "nombre": "PRE CÁLCULO",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT101']
            },
            {
                "id": 'IF200',
                "nombre": "FUNDAMENTOS Y LÓGICA DE PROGRAMACIÓN",
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF112']
            },
            {
                "id": 'HS101',
                "nombre": "HISTORIA DE HONDURAS",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'CR201',
                "nombre": "EL HOMBRE FRENTE A LA VIDA",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['FI101']
            },
            {
                "id": 'IDIN1',
                "nombre": "INGLÉS (PRINCIPIANTE)",
                "creditos": 5,
                "orden": 5,
            },
            {
                "id": 'ESPF1',
                "nombre": "RETIRO DE PADRES DE FAMILIA",
                "creditos": 0,
                "orden": 6,
            },
        ]
    },
    {
        "id": 3,
        "bloque": "III",
        "asignaturas": [
            {
                "id": "MT202",
                "nombre": "ESTADÍSTICA I",
                "creditos": 4,
                "orden": 0,
                "requisitos": ['MT101']
            },
            {
                "id": "MT303",
                "nombre": "CALCULO I",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT201']
            },
            {
                "id": 'IF214',
                "nombre": "PROGRAMACION ESTRUCTURADA I",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF200']
            },
            {
                "id": 'IF213',
                "nombre": "ESTRUCTURAS DISCRETAS",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF200']
            },
            {
                "id": 'IDIN2',
                "nombre": "INGLÉS (INTERMEDIO BAJO)",
                "creditos": 5,
                "orden": 4,
                "requisitos": ['IDIN1']
            },
            {
                "id": 'IF394',
                "nombre": "DISEÑO GRÁFICO",
                "creditos": 3,
                "orden": 5,
            },
        ]
    },
    {
        "id": 4,
        "bloque": "IV",
        "asignaturas": [
            {
                "id": "AD302",
                "nombre": "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['MT202']
            },
            {
                "id": "MT3401",
                "nombre": "CÁLCULO II",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['MT303']
            },
            {
                "id": "IF303",
                "nombre": "PROGRAMACION ESTRUCTURADA II",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF214']
            },
            {
                "id": 'FS201',
                "nombre": "FÍSICA I",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['MT101']
            },
            {
                "id": 'AD101',
                "nombre": "ADMINISTRACIÓN",
                "creditos": 3,
                "orden": 4,
            },
            {
                "id": 'IDIN3',
                "nombre": "INGLÉS (INTERMEDIO ALTO)",
                "creditos": 5,
                "orden": 5,
                "requisitos": ['IDIN2']
            },
            {
                "id": 'CNFS1',
                "nombre": "LABORATORIO DE FISICA I",
                "creditos": 3,
                "orden": 6,
            },
        ]
    },
    {
        "id": 5,
        "bloque": "V",
        "asignaturas": [
            {
                "id": "IF322",
                "nombre": "BASE DE DATOS I",
                "creditos": 3,
                "orden": 0,
            },
            {
                "id": "CT201",
                "nombre": "CONTABILIDAD",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'IF325',
                "nombre": "PROGRAMACIÓN EN ENTORNOS DE DESARROLLO VISUAL",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF303']
            },
            {
                "id": 'IF319',
                "nombre": "PRINCIPIOS DE ELECTRÓNICA",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['FS201']
            },
            {
                "id": 'MT204',
                "nombre": "MATEMATICAS FINANCIERA",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['MT101']
            },
            {
                "id": 'IDIN4',
                "nombre": "INGLÉS (AVANZADO)",
                "creditos": 5,
                "orden": 5,
                "requisitos": ['IDIN3']
            },
        ]
    },
    {
        "id": 6,
        "bloque": "VI",
        "asignaturas": [
            {
                "id": "IF327",
                "nombre": "BASE DE DATOS II",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF322']
            },
            {
                "id": "FI501",
                "nombre": "ÉTICA PROFESIONAL",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['CR201']
            },
            {
                "id": 'IF212',
                "nombre": "ANÁLISIS Y DISEÑO DE SISTEMAS",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'IF323',
                "nombre": "REDES I",
                "creditos": 4,
                "orden": 3,
            },
            {
                "id": 'IF324',
                "nombre": "CIRCUITOS LÓGICOS",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF319']
            },
            {
                "id": 'IDIN5',
                "nombre": "INGLÉS (VOCABULARIO Y LECTURA TÉCNICA)",
                "creditos": 5,
                "orden": 5,
                "requisitos": ['IDIN4']
            },
            {
                "id": 'ESVU2',
                "nombre": "SEMINARIO DE MADUREZ EN LA VIDA UNIVERSITARIA",
                "creditos": 0,
                "orden": 6,
            },
        ]
    },
    {
        "id": 7,
        "bloque": "VII",
        "asignaturas": [
            {
                "id": "IF342",
                "nombre": "BASE DE DATOS MULTIDIMENSIONAL",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF327']
            },
            {
                "id": "IF340",
                "nombre": "PROGRAMACIÓN MULTIPLATAFORMA",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'IF314',
                "nombre": "DESARROLLO DE SOFTWARE",
                "creditos": 4,
                "orden": 2,
                "requisitos": ['IF212']
            },
            {
                "id": 'IF328',
                "nombre": "REDES II",
                "creditos": 4,
                "orden": 3,
                "requisitos": ['IF323']
            },
            {
                "id": 'IF329',
                "nombre": "SISTEMAS AUTOMATIZADOS",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF324']
            },
            {
                "id": 'IDIN5',
                "nombre": "INGLÉS (COMPOSICIÓN Y CONVERSACIÓN)",
                "creditos": 5,
                "orden": 5,
                "requisitos": ['IDIN4']
            },
        ]
    },
    {
        "id": 8,
        "bloque": "VIII",
        "asignaturas": [
            {
                "id": "IF391",
                "nombre": "SISTEMAS INTELIGENTES PARA NEGOCIOS",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF342']
            },
            {
                "id": "IF346",
                "nombre": "IMPLEMENTACIÓN DE SISTEMAS DE SOFTWARE",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF314']
            },
            {
                "id": 'IF345',
                "nombre": "SISTEMAS OPERATIVOS I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'IF370',
                "nombre": "MICROCONTROLADORES",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'BG205',
                "nombre": "ECOLOGÍA",
                "creditos": 3,
                "orden": 4,
            },
        ]
    },
    {
        "id": 9,
        "bloque": "IX",
        "asignaturas": [
            {
                "id": "IF353",
                "nombre": "DESARROLLO DE PORTALES WEB I",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF340']
            },
            {
                "id": "IF351",
                "nombre": "PROGRAMACIÓN MOVIL I",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'AD104',
                "nombre": "GESTIÓN DE LA CALIDAD TOTAL",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'IF352',
                "nombre": "SISTEMAS OPERATIVOS II",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF345']
            },
            {
                "id": 'IF381',
                "nombre": "SEMINARIO DE HARDWARE Y ELECTRICIDAD",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF370']
            },
        ]
    },
    {
        "id": 10,
        "bloque": "X",
        "asignaturas": [
            {
                "id": "IF357",
                "nombre": "DESARROLLO DE PORTALES WEB II",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF353']
            },
            {
                "id": "IF355",
                "nombre": "PROGRAMACIÓN MOVIL II",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF351']
            },
            {
                "id": 'MT304',
                "nombre": "CONTROL ESTADÍSTICO DE LA CALIDAD",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['AD104']
            },
            {
                "id": 'IF356',
                "nombre": "GESTIÓN Y ESTANDARES DE TECNOLOGÍA DE INFORMACIÓN",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'CR501',
                "nombre": "DOCTRINA SOCIAL DE LA IGLESIA",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['FI501']
            },
            {
                "id": 'ESVU3',
                "nombre": "SEMINARIO DE PREPARACIÓN A LA VIDA PROFESIONAL",
                "creditos": 0,
                "orden": 5,
            },
        ]
    },
    {
        "id": 11,
        "bloque": "XI",
        "asignaturas": [
            {
                "id": "IF362",
                "nombre": "NEGOCIOS WEB",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF357']
            },
            {
                "id": "IF347",
                "nombre": "PROGRAMACIÓN DE NEGOCIOS",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'AD402',
                "nombre": "PLANEACIÓN Y DISEÑO DE UN MODELO DE CALIDAD",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['MT304']
            },
            {
                "id": 'IF360',
                "nombre": "SEGURIDAD INFORMÁTICA Y GESTIÓN DE RIESGO",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF356']
            },
            {
                "id": 'IF358',
                "nombre": "ADMINISTRACIÓN DE CENTROS DE COMPUTO",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['IF356']
            },
            {
                "id": 'FMTS1',
                "nombre": "TRABAJO EDUCATIVO SOCIAL",
                "creditos": 3,
                "orden": 5,
                "requisitos": ['CR501']
            },
        ]
    },
    {
        "id": 12,
        "bloque": "XII",
        "asignaturas": [
            {
                "id": "IF361",
                "nombre": "SEMINARIO-TALLER DE SOFTWARE",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['IF362']
            },
            {
                "id": "IF392",
                "nombre": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['IF347']
            },
            {
                "id": 'IF350',
                "nombre": "BIG DATA",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['IF391']
            },
            {
                "id": 'IF380',
                "nombre": "AUDITORÍA DE SISTEMAS DE INFORMACIÓN",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['IF360']
            },
            {
                "id": 'IF393',
                "nombre": "EXCEL AVANZADO PARA INGENIERÍA",
                "creditos": 3,
                "orden": 4,
            },
        ]
    },
    {
        "id": 13,
        "bloque": "XIII",
        "asignaturas": [
            {
                "id": "IF400",
                "nombre": "PRÁCTICA PROFESIONAL SUPERVISADA",
                "creditos": 0,
                "orden": 0,
            },
        ]
    },
    {
        "id": 14,
        "bloque": "ELECTIVAS APROBADAS",
        "asignaturas": [
            {
                "id": "IF395",
                "nombre": "INVESTIGACIÓN TECNOLÓGICA",
                "creditos": 0,
                "orden": 0,
            },
        ]
    },
];

class PlanDeEstudio {
    planDeEstudio = [];
    contenedor = null;
    currentAsignatura = null;

    asignaturasRef = {};
    constructor(planDeEstudio, contenedorSelector = '#planDeEstudio'){
        if(planDeEstudio) {
            this.planDeEstudio = planDeEstudio;
        } else {
            throw new Error("Plan de Estudio es Requerido");
        }
        this.contenedor = document.querySelector(contenedorSelector);

        if (this.contenedor) {
            this.updateUI();
        } else {
            throw new Error(`El selector ${contenedorSelector} no representa un nodo en el documento actual`);
        }
    }

    updateUI(){
        this.contenedor.classList.add("plan");
        this.planDeEstudio.forEach( (bloque) => {
            this.contenedor.appendChild(this.generateBlockUI(bloque));


        } );
    }

    generateBlockUI(bloque){
        const bloqueUI = document.createElement("SECTION");
        bloqueUI.classList.add('bloque');
        const bloqueLabel = document.createElement("DIV");
        bloqueLabel.classList.add('label');
        bloqueLabel.setAttribute("id",`blq_${bloque.id}]`)
        bloqueLabel.innerHTML = bloque.bloque;
        const bloqueAsignaturas = document.createElement("DIV");
        bloqueAsignaturas.classList.add('asignaturas');

        bloque.asignaturas.forEach((asignatura)=>{
            bloqueAsignaturas.appendChild(this.generateAsignatura(asignatura));
        });

        bloqueUI.appendChild(bloqueLabel);
        bloqueUI.appendChild(bloqueAsignaturas);
        return bloqueUI;
    }

    generateAsignatura(asignatura){
        const asignaturaUI = document.createElement("DIV");
        asignaturaUI.classList.add("asignatura");
        asignaturaUI.setAttribute('id', `${asignatura.id}`);
        if (asignatura.requisitos){
            asignaturaUI.setAttribute('data-requisitos', JSON.stringify(asignatura.requisitos || []));
            asignatura.requisitos.forEach((req)=>{
                let apertura = [];
                if(this.asignaturasRef[req]){
                    apertura = JSON.parse(this.asignaturasRef[req].getAttribute('data-apertura') || '[]');
                }
                if(!apertura.includes(asignatura.id)) {
                    apertura.push(asignatura.id);
                }
                if (apertura.length > 0) {
                    this.asignaturasRef[req].setAttribute('data-apertura', JSON.stringify(apertura));
                }
            });
        }
        
        asignaturaUI.innerHTML = `<span>${asignatura.nombre}<br/>(${asignatura.id})<br> Créditos: ${asignatura.creditos}</span>`;
        asignaturaUI.addEventListener('mouseenter', ()=>{
            //CLOJURE
            this.currentAsignatura = asignaturaUI;
            this.currentAsignatura.classList.add("selected");
            let requisitos = JSON.parse(this.currentAsignatura.dataset.requisitos || '[]');
            let apertura = JSON.parse(this.currentAsignatura.dataset.apertura || '[]');

            requisitos.forEach((req)=>{
                this.asignaturasRef[req].classList.add('requisito');
            });
            apertura.forEach((apt)=>{
                this.asignaturasRef[apt].classList.add('apertura');
            });
        });
        asignaturaUI.addEventListener('mouseleave', ()=>{
            this.currentAsignatura.classList.remove("selected");
            let requisitos = JSON.parse(this.currentAsignatura.dataset.requisitos || '[]');
            let apertura = JSON.parse(this.currentAsignatura.dataset.apertura || '[]');
            requisitos.forEach((req)=>{
                this.asignaturasRef[req].classList.remove('requisito');
            });
            apertura.forEach((apt)=>{
                this.asignaturasRef[apt].classList.remove('apertura');
            });
            this.currentAsignatura = null;
        });
        this.asignaturasRef[asignatura.id] = asignaturaUI;
        return asignaturaUI;
    }
}
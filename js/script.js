/**
 * 1. CONFIGURACIÓN DE TRADUCCIONES
 */
const traducciones = {
    es: {
        doc_title: "Hospedaje de Caballos | Centro ecuestre La Maluca",
        nav_inicio: "Inicio",
        nav_sobre: "Sobre nosotros",
        nav_galeria: "Galería",
        nav_alojamiento: "Servicios",
        nav_contacto: "Contacto",
        hero_h1: "Alojamiento de Primera Clase para su Caballo",
        hero_p: "Seguridad, bienestar y descanso en un entorno natural único.",
        hero_btn: "Ver Disponibilidad",
        qs_titulo: "Quiénes Somos",
        qs_p: "Nos dedicamos al cuidado minucioso de caballos en tránsito o estancias de descanso, ofreciendo boxes amplios y atención 24/7.",
        gal_titulo: "Nuestras Instalaciones",
        serv_titulo: "Nuestros Servicios",
        card1_h3: "Box de Tránsito",
        card1_p: "Ideal para paradas nocturnas. Incluye todo tipo de servicios.",
        card2_h3: "Alquiler de Boxes",
        card2_p: "Espacio al completo a todas las instalaciones (2 pistas, picadero cubierto, áreas de descanso).",
        info_cont: "Para más información póngase en contacto",
        mapa_h1: "Un magnífico punto de descanso para tus caballos",
        mapa_btn: "📍 Cómo llegar (Mejor Ruta)",
        res_titulo: "¡RESERVA TU ESTANCIA AHORA!",
        res_cal: "Selecciona tus fechas en el calendario:",
        res_nombre: "NOMBRE *",
        res_caballos: "CABALLOS",
        res_llegada: "FECHA DE LLEGADA",
        res_salida: "FECHA DE SALIDA",
        res_email: "CORREO ELECTRÓNICO *",
        res_tel: "TELÉFONO",
        res_coment: "COMENTARIOS",
        res_priv: "Política de privacidad *",
        res_btn_enviar: "ENVIAR SOLICITUD",
        foo_h2: "Finca Los Galguillos, tu alto en el camino",
        foo_cont: "Contacto",
        foo_link: "Enlaces",
        foo_priv: "Política de privacidad",
        foo_aviso: "Aviso legal"
    },
    en: {
        doc_title: "Horse Lodging | La Maluca Equestrian Center",
        nav_inicio: "Home",
        nav_sobre: "About Us",
        nav_galeria: "Gallery",
        nav_alojamiento: "Services",
        nav_contacto: "Contact",
        hero_h1: "First Class Accommodation for your Horse",
        hero_p: "Safety, welfare and rest in a unique natural environment.",
        hero_btn: "Check Availability",
        qs_titulo: "About Us",
        qs_p: "We are dedicated to the meticulous care of horses in transit or rest periods, offering spacious boxes and 24/7 attention.",
        gal_titulo: "Our Facilities",
        serv_titulo: "Our Services",
        card1_h3: "Transit Box",
        card1_p: "Ideal for overnight stops. Includes all types of services.",
        card2_h3: "Box Rental",
        card2_p: "Full access to all facilities (2 arenas, indoor arena, resting areas).",
        info_cont: "For more information please contact us",
        mapa_h1: "A magnificent resting point for your horses",
        mapa_btn: "📍 How to get there (Best Route)",
        res_titulo: "BOOK YOUR STAY NOW!",
        res_cal: "Select your dates on the calendar:",
        res_nombre: "NAME *",
        res_caballos: "HORSES",
        res_llegada: "ARRIVAL DATE",
        res_salida: "DEPARTURE DATE",
        res_email: "EMAIL ADDRESS *",
        res_tel: "PHONE",
        res_coment: "COMMENTS",
        res_priv: "Privacy Policy *",
        res_btn_enviar: "SEND REQUEST",
        foo_h2: "Los Galguillos Farm, your stop on the road",
        foo_cont: "Contact",
        foo_link: "Links",
        foo_priv: "Privacy Policy",
        foo_aviso: "Legal Notice"
    },
    pt: {
        doc_title: "Hospedagem de Cavalos | Centro Hípico La Maluca",
        nav_inicio: "Início",
        nav_sobre: "Sobre nós",
        nav_galeria: "Galeria",
        nav_alojamiento: "Serviços",
        nav_contacto: "Contato",
        hero_h1: "Alojamento de Primeira Clase para o seu Cavalo",
        hero_p: "Segurança, bem-estar e descanso em um ambiente natural único.",
        hero_btn: "Ver Disponibilidade",
        qs_titulo: "Quem Somos",
        qs_p: "Dedicamo-nos ao cuidado minucioso de cavalos em trânsito ou estadias de descanso, oferecendo boxes amplos e atenção 24/7.",
        gal_titulo: "Nossas Instalações",
        serv_titulo: "Nossos Serviços",
        card1_h3: "Box de Trânsito",
        card1_p: "Ideal para paragens nocturnas. Inclui todos os tipos de serviços.",
        card2_h3: "Aluguer de Boxes",
        card2_p: "Acesso total a todas as instalações (2 pistas, picadeiro coberto, áreas de descanso).",
        info_cont: "Para mais informações, entre em contato",
        mapa_h1: "Um magnífico ponto de descanso para os seus cavalos",
        mapa_btn: "📍 Como chegar (Melhor Rota)",
        res_titulo: "RESERVE SUA ESTADIA AGORA!",
        res_cal: "Selecione suas datas no calendario:",
        res_nombre: "NOME *",
        res_caballos: "CAVALOS",
        res_llegada: "DATA DE CHEGADA",
        res_salida: "DATA DE SAÍDA",
        res_email: "E-MAIL *",
        res_tel: "TELEFONE",
        res_coment: "COMENTÁRIOS",
        res_priv: "Política de Privacidade *",
        res_btn_enviar: "ENVIAR SOLICITAÇÃO",
        foo_h2: "Finca Los Galguillos, sua parada no caminho",
        foo_cont: "Contato",
        foo_link: "Links",
        foo_priv: "Política de Privacidade",
        foo_aviso: "Aviso Legal"
    }
};
function cambiarIdioma(idioma) {
    document.querySelectorAll('[data-key]').forEach(elemento => {
        const llave = elemento.getAttribute('data-key');
        if (traducciones[idioma][llave]) elemento.innerText = traducciones[idioma][llave];
    });
    const imgActual = document.getElementById('lang-img-actual');
    const textoActual = document.getElementById('lang-text-actual');
    const flags = { 'es': 'https://flagcdn.com/w20/es.png', 'en': 'https://flagcdn.com/w20/gb.png', 'pt': 'https://flagcdn.com/w20/pt.png' };
    imgActual.src = flags[idioma];
    textoActual.innerText = idioma.toUpperCase();
}

/**
 * 2. AUTOMATIZACIÓN DE GOOGLE CALENDAR
 */
const API_KEY = 'AIzaSyCqebRv0b2zrUWtMHgIFiSIMs9KdWgGckw';
const CALENDAR_ID = '0b7f468fc3eb0c90b360fc6c1d7d94a085c7e937ae2564eb3d56a751c043d134@group.calendar.google.com';

async function obtenerFechasOcupadas() {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&singleEvents=true`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items.map(event => ({
            from: event.start.date || event.start.dateTime,
            to: event.end.date || event.end.dateTime
        }));
    } catch (error) {
        console.error("Error cargando disponibilidad:", error);
        return [];
    }
}

/**
 * 3. INICIALIZACIÓN
 */
document.addEventListener('DOMContentLoaded', async function() {
    cambiarIdioma('es');

    // Cargar fechas desde Google antes de mostrar el calendario
    const fechasBloqueadas = await obtenerFechasOcupadas();

    flatpickr("#calendar-inline", {
        inline: true,
        mode: "range",
        showMonths: 2,
        minDate: "today",
        locale: "es",
        dateFormat: "d/m/Y",
        disable: fechasBloqueadas, // ¡Aquí ocurre la magia!
        onChange: function(selectedDates, dateStr) {
            document.getElementById('calendario-airbnb').value = dateStr;
        }
    });

    // Manejo del Envío
    const form = document.getElementById('form-completo');
    const btnEnviar = document.getElementById('btn-enviar');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        btnEnviar.innerText = 'ENVIANDO...';
        btnEnviar.disabled = true;

        const serviceID = 'service_l3dst6b'; 
        const templateID = 'template_4paot02';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('¡Solicitud enviada con éxito!');
                form.reset();
                btnEnviar.innerText = 'ENVIAR SOLICITUD';
                btnEnviar.disabled = false;
            }, (err) => {
                alert('Fallo: ' + JSON.stringify(err));
                btnEnviar.disabled = false;
            });
    });
});
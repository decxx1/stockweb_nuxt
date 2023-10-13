export default defineNuxtRouteMiddleware( async () => {
    const api = useState('api').value;
    const jwt = useState('jwt').value;
    const usuario = useState('usuario').value;
    if (usuario.rol !== 'propietario' && usuario.rol !== 'administrador') {
        navigateTo('/app/dashboard');
    }
    const response3 = await fetch(api + 'create_preference.php', {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    });
    const data = await response3.json();
    useState('preference_id', () => data.preference_id);
    
    const response = await fetch(api+'ajax-varios.php?get_estados=1', {
        headers: {
        'Authorization': `Bearer ${jwt}`
        }
    });
    const estados = await response.json();
    useState('estados', () => estados);

});
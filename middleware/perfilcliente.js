export default defineNuxtRouteMiddleware( async () => {
    const api = useState('api').value;
    const jwt = useState('jwt').value;
    const route = useRoute();
    var id = route.params.id;
    if(!id){
        navigateTo('/app/clientes')
    }else{
        const response = await fetch(api + "ajax-clientes.php?get_perfil_cliente=" + id, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
        var data = await response.json();
        console.log(data);
        if(!data.status){
            navigateTo('/app/clientes');
        }else{
            useState('cliente_id', () => id);
            useState('cliente_data', () => data);
        }

    }
})
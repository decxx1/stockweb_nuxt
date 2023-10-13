import Cookies from "js-cookie";
export default defineNuxtRouteMiddleware( async () => {
    const api = useRuntimeConfig().public.API_PATH;
    
    let jwt;
    if(Cookies.get('jwt')){
        jwt = Cookies.get('jwt');
        const chk_jwt = await fetch(api + "init.php", {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
        });
        
        const resp_jwt = await chk_jwt.json();
        
        if (!resp_jwt.status) {
            console.log(resp_jwt.status);
            Cookies.remove('jwt');
            return navigateTo('/login')
        }
  
    }else{
        return navigateTo('/login')
    }
   
    const response = await fetch(api + 'ajax-varios.php?get_usuario=1', {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    });
    const usuario = await response.json();

    const response2 = await fetch(api + 'ajax-varios.php?get_cuenta=1', {
        headers: {
        'Authorization': `Bearer ${jwt}`
        }
    });
    const cuenta = await response2.json();
    useState('api', () => api);
    useState('jwt', () =>  jwt);
    useState('usuario', () => usuario);
    useState('cuenta', () => cuenta);
    
})

export async function get_avatar(api, jwt) {
    const response = await fetch(api+'ajax-varios.php?get_avatar=1', {
        headers: {
        'Authorization': `Bearer ${jwt}`
        }
    });
    const avatar = await response.json();
    return avatar;
}
export async function get_ajustes(api, jwt) {
    const response = await fetch(api + 'ajax-varios.php?get_ajustes=1', {
        headers: {
        'Authorization': `Bearer ${jwt}`
        }
    });
    const ajustes = await response.json();
    return ajustes;
}

export async function get_notificaciones(api,jwt){
    const response = await fetch(api+'ajax-varios.php?notifications=1', {
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
    });
    const data = await response.json();
    return data;
}

export async function get_historial(api,jwt){
    const response = await fetch(api+'ajax-varios.php?get_historial=1', {
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
    });
    const data = await response.json();
    return data;
}

export async function get_usuarios_online(api,jwt){
    const response = await fetch(api+'ajax-varios.php?usuarios_online=1', {
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
    });
    const data = await response.json();
    return data;
}
export default defineNuxtRouteMiddleware( async () => {
    const cuenta = useState('cuenta').value;
    if (!cuenta.pago) {
        navigateTo('/app/');
    }

});
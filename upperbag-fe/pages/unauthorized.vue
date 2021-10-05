<template>
    <div class="main-unauthorized">
        <br>
        <h4>Você não possui autorização para ver esta página</h4>
        <br>
        <h4>Como caralhos você encontrou esse link? Não está disponível em lugar algum!</h4>
        <br>
        <h4>Enquanto demito quem lhe forneceu esta URL, você pode:</h4>
        <br>
        <h4><li>Contatar o administrador do sistema</li></h4>
        <h4><li><router-link to="/">Voltar ao dashboard</router-link></li></h4>
        <h4><li>Ligar para +55 11 98985-5875 e ter a melhor noite de sua vida</li></h4>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.main-unauthorized > h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>
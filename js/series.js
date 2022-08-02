const onzeVinte = document.getElementById("onze-vinte");
const vinteTrinta = document.getElementById("vinteUm-trinta");
const trintaUltimo = document.getElementById("trintaUm-ultimo");
const btnVerMais = document.getElementById("ver-mais");

function series()
{
    onzeVinte.style.display = 'none';
    vinteTrinta.style.display = 'none';
    trintaUltimo.style.display = 'none';
}

function verMais()
{
    console.log("clicado");
    if(onzeVinte.style.display == 'none')
    {
        onzeVinte.style.display = 'flex';
        onzeVinte.style.flexDirection = 'column';
    }
    else if(vinteTrinta.style.display == "none")
    {
        vinteTrinta.style.display = "flex";
        vinteTrinta.style.flexDirection = "column";
    }
    else
    {
        trintaUltimo.style.display = "flex";
        trintaUltimo.style.flexDirection = "column";
        btnVerMais.style.display = "none";
    }
}
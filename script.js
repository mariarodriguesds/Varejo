function Validar(){
    var nome = document.getElementById("InputNome");
    var email = document.getElementById("InputEmail");
    var telefone = document.getElementById("InputTelefone");

        if(nome.value || email.value || telefone.value === "" ){
            alert("Por favor, preencha todos os campos");
        }
        else{
            alert("Obrigado pelo feedback");
        }
}
var TotalQuantia = "0,00";

      function Pronto(){
        const RemoverProduto = document.getElementsByClassName("remove-product-button");
        for(var i = 0; i.RemoverProduto.lenght; i++){
          RemoverProduto[i].addEventListener("click", RemoverProduto)
        }

        const QuantItens = document.getElementsByClassName("product-qtd-input");
        for(var i = 0; i < QuantItens.length; i++){
          QuantItens[i].addEventListener("change", ChecarVazio);
        }

        const AdiciorProduto = document.getElementsByClassName("para-carrinho");
        for(var i = 0; i < AdiciorProduto.length; i++){
          AdiciorProduto[i].addEventListener("click", AdicionarCarrinho);
        }

        const BotaoCompra = document.getElementsByClassName("purchase-button")[0];
        BotaoCompra.addEventListener("click", FazerCompra); 
      }

      function RemoverItem(event){
        event.target.parentElement.parentElement.remove();
        updateTotal();
      }

      function VerInputVazio(event){
        if(event.target.value === "0"){
            event.taget.parentElement.parentElement.remove();
        }
        updateTotal();
      }

      function AdicionarCarrinho(event){
        const button = event.target;
        const infoProdutos = button.parentElement.parentElement;
        const imageProdutos = infoProdutos.getElementsByClassName("image-produto")[0];src
        const nomeProduto = infoProdutos.getElementsByClassName("nome-produto").innerText;
        const precoProduto = infoProdutos.getElementsByClassName("preco-produto").innerText;

        const carrinhoNomeProduto = document.getElementsByClassName("nome-produto");
        for(var i = 0; i < carrinhoNomeProduto.length; i++){
            if(carrinhoNomeProduto[i].innerText === nomeProduto){
                carrinhoNomeProduto[i].parentElement.parentElement.getElementsByClassName("product-qtd-input").value++;
                updateTotal();
                return;
            }
        }
    }

        let novoItemCarrinho = document.createElement("tr");
        novoItemCarrinho.classList.add("cart-product");

        novoItemCarrinho.innerHTML = 
        `
      <td class="product-identification">
        <img src="${image-produto}" alt="${nome-produto}" class="cart-product-image">
        <strong class="cart-product-title">${nome-produto}</strong>
      </td>
      <td>
        <span class="cart-product-price">${preco-produto}</span>
      </td>
      <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button type="button" class="remove-product-button">Remover</button>
      </td>
    `

    const corpoTabela = document.querySelector(".cart-table tbody");
    corpoTabela.append(novoItemCarrinho);
    updateTotal();

    novoItemCarrinho.getElementByClassName("remove-product-button")[0].addEventListener("click", RemoverItem);
    novoItemCarrinho.getElementsByClassName("remove-product-button")[0].addEventListener("change", VerInputVazio);

    function FazerCompra(){
        if(TotalQuantia === "0,00"){
            alert("Sreu carrinho está vazio!");
        }
        else{
         alert( `
        Obrigado pela sua compra!
        Valor do pedido: R$${totalQuantia}\n
        Volte sempre :)
      `
      );
        }

        document.querySelector(".cart-table tbody").innerHTML = ""; 
        updateTotal();
    }

    function updateTotal() {
      const produtoCarrinho = document.getElementsByClassName("cart-product")
      totalQuantia = 0

      for (var i = 0; i < produtoCarrinho.length; i++) {
        const precoProduto= produtoCarrinho[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".");
        const quantProduto = produtoCarrinho[i].getElementsByClassName("product-qtd-input")[0].value;

        totalQuantia += precoProduto * quantProduto;
      }
      
      totalQuantia = totalQuantia.toFixed(2);
      totalQuantia = totalQuantia.replace(".", ",");
      document.querySelector(".cart-total-container span").innerText = "R$" + totalQuantia;
    }


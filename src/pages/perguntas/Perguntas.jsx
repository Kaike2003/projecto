import React from "react";
import "./Perguntas.css"
import { FiChevronDown } from "react-icons/fi";
import { BsQuestionOctagon } from "react-icons/bs";
import { BsX } from "react-icons/bs";





export default function Perguntas(){


   return(
    <>
     <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">

      <div class="section-title text-center">
        <h2>Perguntas frequentes </h2>
        <p>Questões mais  pretinetes feitas pelos úsuarios deste site e respostas esclarecedoras para melhor  confiança dos nossos clientes.</p>
      </div>

      <div class="faq-list">
        <ul>
          <li data-aos="fade-up" data-aos="fade-up" data-aos-delay="100">
            <BsQuestionOctagon className="icon-help"></BsQuestionOctagon>
            <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">Como saber se este site é seguro para fazer compras?     <FiChevronDown className="icon-show"></FiChevronDown>
            <BsX className="icon-close"></BsX>
            </a>
            <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
              <p>
                Este site possui um canal para reclamações e uma política de troca. Uma forma direta de comunicação entre consumidor e loja demonstra comprometimento, isso sem falar de facilitar sua vida no caso de ocorrer algum problema.


              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
          <BsQuestionOctagon className="icon-help"></BsQuestionOctagon> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">O que é preciso para fazer uma compra online?
          <FiChevronDown className="icon-show"></FiChevronDown>
          <BsX className="icon-close"></BsX>
              </a>
            <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
              <p>
             Para fazer essa compra, é necessário fazer um cadastro no site com as suas informações pessoais como nome, CPF, telefone e endereço  e selecionar o tipo de de evento a ser comprado. 
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="300">
          <BsQuestionOctagon className="icon-help"></BsQuestionOctagon> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Como realizar compras online de forma segura? 
          <FiChevronDown className="icon-show"></FiChevronDown>
          <BsX className="icon-close"></BsX></a>
            <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
              <p>1ºPesquise a reputação da loja
                2ºVerifique se o site disponibiliza informações sobre a empresa
                3ºLeia a política de compra e privacidade da empresa
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400"> 
          <BsQuestionOctagon className="icon-help"></BsQuestionOctagon> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Como pagar uma compra feita na internet?
          <FiChevronDown className="icon-show"></FiChevronDown>
          <BsX className="icon-close"></BsX>
          </a>
            <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
              <p> Você acessa sua conta do banco pelo celular ou computador, vai na opção pagamentos. Você pode usar sua câmera do celular como leitor de código de barras ou digitar os números do boleto. Assim que confirmar o pagamento, o valor será debitado de sua conta corrente.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="500">
          <BsQuestionOctagon className="icon-help"></BsQuestionOctagon>
            <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Quais são as vantagens e desvantagens de compras online?
            <FiChevronDown className="icon-show"></FiChevronDown>
          <BsX className="icon-close"></BsX>
            </a>
            <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
              <p>
                Vantagens:
                Comodidade sem sair do lugar.
                Variedade em pagamento.
                Privacidade ao usuário.
                Opções diversas de produtos.
                Opinião de outros usuários.
                Funcionamento em tempo integral.
                <p>Desvantagens:Embora haja promoções exclusivas para compras online, é preciso fazer bem as contas. A maior parte das empresas cobra uma taxa pelo envio dos artigos. Veja se o preço final compensa com o tempo de espera.</p>
              </p>
            </div>
          </li>

        </ul>
      </div>

    </div>
  </section>

    
    </>
   )
}
const botaoFinalizar = document.getElementById("finalizarQuiz");

botaoFinalizar.addEventListener("click", function () {

    let pontuacao = 0;

    // PERGUNTA 1
    const resposta1 = document.querySelector(
        'input[name="pergunta1"]:checked'
    );

    if (resposta1 && resposta1.value === "HTML") {
        pontuacao++;
    }

    // PERGUNTA 2
    const resposta2 = document.getElementById("p2").value;

    const resposta2Tratada = resposta2
        .trim()
        .toLowerCase();

    if (
        resposta2Tratada === "dominio" ||
        resposta2Tratada === "domínio"
    ) {
        pontuacao++;
    }

    // PERGUNTA 3
    const senha = document.getElementById("p3").value;

    const temTamanho = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temCaractereEspecial = /[^A-Za-z0-9]/.test(senha);

    if (
        temTamanho &&
        temMaiuscula &&
        temMinuscula &&
        temNumero &&
        temCaractereEspecial
    ) {
        pontuacao++;
    }

    // PERGUNTA 4
    const data = document.getElementById("p4").value;

    if (data !== "") {
        const ano = new Date(data).getFullYear();

        if (ano === 1991) {
            pontuacao++;
        }
    }

    // PERGUNTA 5
    const respostas5 = document.querySelectorAll(
        'input[name="pergunta5"]:checked'
    );

    const valores5 = Array.from(respostas5).map(function (resposta) {
        return resposta.value;
    });

    const acertouPergunta5 =
        valores5.length === 2 &&
        valores5.includes("JavaScript") &&
        valores5.includes("Java");

    if (acertouPergunta5) {
        pontuacao++;
    }

    // PERGUNTA 6
    const arquivo = document.getElementById("p6");

    if (arquivo.files.length > 0) {
        const nomeArquivo = arquivo.files[0].name.toLowerCase();

        if (nomeArquivo.endsWith(".html")) {
            pontuacao++;
        }
    }

    // PERGUNTA 7
    const resposta7 = document.getElementById("p7").value;

    if (resposta7 === "type") {
        pontuacao++;
    }

    // PERGUNTA 8
    const resposta8 = document.getElementById("p8").value;

    const resposta8Tratada = resposta8
        .trim()
        .toLowerCase();

    if (resposta8Tratada === "java") {
        pontuacao++;
    }

    // DEFINIR MENSAGEM DE AVALIAÇÃO COM BASE NA PONTUAÇÃO
    let avaliacao = "";

    if (pontuacao <= 2) {
        avaliacao = "Não desista! Cada tentativa é uma oportunidade de aprender.";
    } else if (pontuacao <= 4) {
        avaliacao = "Você ainda precisa melhorar. Que tal estudar mais sobre programação?";
    } else if (pontuacao <= 7) {
        avaliacao = "Bom! Seu conhecimento em programação está satisfatório.";
    } else {
        avaliacao = "Perfeito! Você está muito bem informado sobre programação.";
    }

    // MOSTRAR RESULTADO
    alert(
        `Quiz finalizado!\n\nVocê acertou ${pontuacao} de 8 perguntas.\n\n${avaliacao}`
    );

    // LIMPAR RESPOSTAS

    // Pergunta 1
    document.querySelectorAll(
        'input[name="pergunta1"]'
    ).forEach(function (radio) {
        radio.checked = false;
    });

    // Pergunta 2
    document.getElementById("p2").value = "";

    // Pergunta 3
    document.getElementById("p3").value = "";

    // Pergunta 4
    document.getElementById("p4").value = "";

    // Pergunta 5
    document.querySelectorAll(
        'input[name="pergunta5"]'
    ).forEach(function (checkbox) {
        checkbox.checked = false;
    });

    // Pergunta 6
    document.getElementById("p6").value = "";

    // Pergunta 7
    document.getElementById("p7").selectedIndex = 0;

    // Pergunta 8
    document.getElementById("p8").value = "";

});
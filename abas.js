/* Abas da seção "Documentos e mídias". Sem este script, todos os painéis
   permanecem visíveis em sequência (a lista de abas fica oculta). */
(function () {
    'use strict';

    const secao = document.getElementById('recursos');
    const lista = secao ? secao.querySelector('[role="tablist"]') : null;
    if (!lista) {
        return;
    }

    const abas = Array.from(lista.querySelectorAll('[role="tab"]'));
    const painelDe = aba => document.getElementById(aba.getAttribute('aria-controls'));

    const ativar = (aba, moverFoco) => {
        abas.forEach(outra => {
            const ativa = outra === aba;
            outra.setAttribute('aria-selected', String(ativa));
            outra.tabIndex = ativa ? 0 : -1;
            painelDe(outra).hidden = !ativa;
        });
        if (moverFoco) {
            aba.focus();
        }
    };

    const abaDoHash = () => {
        const id = window.location.hash.slice(1);
        return abas.find(aba => aba.getAttribute('aria-controls') === id);
    };

    lista.hidden = false;

    abas.forEach((aba, indice) => {
        aba.addEventListener('click', () => {
            ativar(aba, false);
            window.history.replaceState(null, '', `#${aba.getAttribute('aria-controls')}`);
        });

        aba.addEventListener('keydown', evento => {
            const ultimo = abas.length - 1;
            const destinos = {
                ArrowRight: indice === ultimo ? 0 : indice + 1,
                ArrowLeft: indice === 0 ? ultimo : indice - 1,
                Home: 0,
                End: ultimo,
            };
            if (evento.key in destinos) {
                evento.preventDefault();
                const destino = abas[destinos[evento.key]];
                ativar(destino, true);
                window.history.replaceState(null, '', `#${destino.getAttribute('aria-controls')}`);
            }
        });
    });

    // Links do menu (#ppc, #materiais, #galeria) abrem a aba correspondente.
    const abrirPeloHash = rolar => {
        const aba = abaDoHash();
        if (aba) {
            ativar(aba, false);
            if (rolar) {
                secao.scrollIntoView();
            }
        }
    };

    window.addEventListener('hashchange', () => abrirPeloHash(true));

    ativar(abaDoHash() || abas[0], false);
    if (abaDoHash()) {
        secao.scrollIntoView();
    }
}());

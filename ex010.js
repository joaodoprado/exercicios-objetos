

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

// clientes
const patricia = { nome: "Patricia", carrinho: [teclado, caboUsb, caboUsb, mouse, carregador, monitor] }
const carlos = { nome: "Carlos", carrinho: [notebook, notebook] }
const renato = { nome: "Renato", carrinho: [webcam, webcam, webcam,webcam, webcam] }
const jose = { nome: "José", carrinho: [tv, caboUsb, webcam] }
const roberto = { nome: "Roberto", carrinho: [webcam, caboUsb, caboUsb, monitor] }

console.log(patricia)
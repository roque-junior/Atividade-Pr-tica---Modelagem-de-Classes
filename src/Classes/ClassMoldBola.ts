export class Bola {
    cor: string;
    circunferencia: number;
    material: string;
  
    constructor(cor: string, circunferencia: number, material: string) {
      this.cor = cor;
      this.circunferencia = circunferencia;
      this.material = material;
    }
  
    trocarCor(novaCor: string) {
      this.cor = novaCor;
    }
  //   mostraCor() {
  //     this.cor
  //   }
  }
/**
 * Author: Adolfo A. Granados Cosio
 * Description: LinkedList algorithm
 * Date: Feb 14, 2023
 */

import Nodo from "./nodo";

export default class ListasEnlazadasSimples1 {
    cabeza: Nodo | null;

    constructor(cabeza: Nodo | null = null) {
        this.cabeza = cabeza;
    }

    /**
     * Este método inserta los nodos al inicio de la lista
     * @param {*} data El parámetro data puede tomar cualquier valor
     */
    insertarInicio(data: any) {
        const nuevo = new Nodo(data);
        nuevo.enlace = this.cabeza;
        this.cabeza = nuevo;
    }

    /**
     * Este método inserta entre dos nodos en una lista enlazada simple
     * @param {*} data Es el valor que se insertará en la lista
     * @param {*} buscar Indica detrás de qué nodo se debe insertar
     */
    insertarEntre(data: any, buscar: number) {
        if (buscar === 0) {
            this.insertarInicio(data);
        } else if (buscar > 0) {
            const nuevo = new Nodo(data);
            let temp = this.cabeza;
            let i = 0;
            while (temp && i < buscar - 1) {
                temp = temp.enlace;
                i++;
            }
            if (temp) {
                nuevo.enlace = temp.enlace;
                temp.enlace = nuevo;
            }
        }
    }

    insertarFinal(data: any) {
        const ndn: Nodo = new Nodo(data);
        if (!this.cabeza) {
            this.cabeza = ndn;
        } else {
            let nda = this.cabeza;
            while (nda.enlace !== null) {
                nda = nda.enlace;
            }
            nda.enlace = ndn;
        }
    }

    /**
     * Este método elimina el nodo con el valor especificado
     */
    eliminar(data: any) {
        if (!this.cabeza) {
            return;
        }
        if (this.cabeza.data === data) {
            this.cabeza = this.cabeza.enlace;
            return;
        }
        let temp = this.cabeza;
        while (temp.enlace !== null && temp.enlace.data !== data) {
            temp = temp.enlace;
        }
        if (temp.enlace !== null) {
            temp.enlace = temp.enlace.enlace;
        }
        console.log("Nodo eliminado....");
    }

    impresion() {
        let temp = this.cabeza;
        let valores = '';
      
        while (temp !== null) {
          valores += `Nombre: ${temp.data.nombre}, Edad: ${temp.data.edad}, Email: ${temp.data.email}, Genero: ${temp.data.genero}\n`;
          temp = temp.enlace;
        }
      
        return valores;
      }
      
    }

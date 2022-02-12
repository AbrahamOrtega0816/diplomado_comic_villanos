import { Injectable } from '@angular/core';

@Injectable()
export class VillanosService{

    private villanos: Villano[] = [
        {
          nombre: "Justin Hammer",
          bio: "En Iron Man 2, Tony Stark no solo tuvo que enfrentarse a Ivan Vanko, quien culpó al padre de Tony por la deshonra de su propia familia, sino también a su rival empresarial y fabricante de armas de mala calidad Justin Hammer, quien conspiró en secreto con Vanko para replicar la tecnología Arc Reactor de Stark. Hammer fue arrestado cuando Vanko casi mata a cientos de personas en la Stark Expo usando Hammer Drones.",
          img: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2020/10/mcu-villains-justin-hammer.jpg",
          aparicion: "2010",
          casa:"Marvel"
        },
        {
          nombre: "Ronan el Acusador",
          bio: "Ronan el Acusador buscó acabar con toda la vida en Xandar después de que el Imperio Kree hiciera un pacto de paz con ellos. Tenía sentido considerando que este señor de la guerra genocida trató de borrar a todos los Skrulls de la existencia, y lo habría logrado si no hubiera sido por la Capitana Marvel. Años después, Ronan se convertiría en átomos gracias a los Guardianes de la Galaxia mientras canalizaban el poder de la Piedra de Poder.",
          img: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2020/10/Lee-Pace-as-Ronan.jpg",
          aparicion: "1967",
          casa: "Marvel"
        },
        {
          nombre: "Brainiac",
          bio: "Este robot extraterrestre creado en 1958 por Otto Binder y Al Plastino es el responsable de convertir en miniatura la capital de Krypton, el planeta de donde viene Superman. Este villano ha adoptado muchas formas, pero la más famosa es la de humanoide de color verde. Su símbolo es muy conocido y representa los diodos que tiene en su cabeza.",
          img: "https://www.akiracomics.com/imagenes/poridentidad?identidad=2d536073-efc9-4a4b-b837-a55864b1b13e&ancho=850&alto=",
          aparicion: "1958",
          casa: "DC"
        },
        {
          nombre: "Gran Maestro",
          bio: "Cuando Asgard cayó bajo el gobierno de la hija de Odín, Hela, Thor y Loki se encontraron atrapados en el planeta basura (literalmente) de Sakaar, donde un Anciano Cósmico hedonista conocido como El Gran Maestro enfrentó a guerreros capturados entre sí en un espectáculo estilo gladiadores llamado el Concurso de Campeones. Juguetón, narcisista y letal, el Gran Maestro perdería su dominio absoluto sobre Sakaar después de un levantamiento provocado por la fuga de Thor.",
          img: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2020/10/the-grandmaster.jpg",
          aparicion: "1969",
          casa:"Marvel"
        },
        {
          nombre: "Ulysses Klaue (Klaw)",
          bio: "Traficante de armas despiadado y dolor perenne de Wakanda, Ulysses Klaue fue la única persona que logró sacar vibranium de la nación africana. Y aunque la marca que los habitantes de Wakanda le pusieron en el cuello lo señalaría para siempre como un estafador, es Ultron quien marcaría a Klaue de una manera importante cuando le cortó el brazo. Klaue reemplazaría su extremidad con un cañón sónico cibernético y continuaría trabajando como el principal ladrón de vibranium del mundo... hasta que fue traicionado y asesinado por el primo de T'Challa, Erik Killmonger..",
          img: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2020/10/Szgt3LDdyetyegKZTqgiES.jpg",
          aparicion: "1967",
          casa: "Marvel"
        },
        {
          nombre: "Ultron",
          bio: "Después de que la Batalla de Nueva York lo cargara de ansiedad, Tony Stark se sintió imbuido de un impulso loco por proteger el mundo. Su plan, sin embargo, se descarriló fatalmente cuando los poderes de Wanda Maximoff ayudaron a dar a luz a Ultron, una IA loca de mantenimiento de la paz programa, alojada en una armadura de vibranium. Mantenía la vieja y simpática filosofía de el único ser humano bueno es un ser humano muerto. Ultron atacó a los Vengadores y, en sus esfuerzos por extinguir a la humanidad, arrasó con Sokovia y mató a Pietro Maximoff.",
          img: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2020/10/Avengers-Ultron-Marvel-Studios-Coronavirus-1280x720.jpg",
          aparicion: "1968",
          casa: "Marvel"
        },
        {
          nombre: "Brock Rumlow (Calavera)",
          bio: "Como líder del equipo de ataque de SHIELD que también era un agente secreto de HYDRA, Brock Rumlow era un engranaje integral en los planes de Alexander Pierce para lanzar Project Insight y hundir a Estados Unidos en la tiranía. Después de sobrevivir al colapso parcial del Triskelion, Rumlow se convirtió en un mercenario enmascarado a sueldo. Es un matón de primer nivel y sus acciones en Nigeria, que algunos todavía creen que pueden haber sido orquestadas por Helmut Zemo, provocaron los Acuerdos de Sokovia después de que Wanda Maximoff matara accidentalmente a civiles inocentes.",
          img: "http://oyster.ignimgs.com/wordpress/stg.ign.com/2020/10/3054087-untitled-5.jpg",
          aparicion: "2014",
          casa:"Marvel"
        }
        
    ];
    
      constructor(){
          console.log("Servicio listo para consumir");
      }
      getvillanos():Villano[]{
          return this.villanos;
      }
      getVillano( idx: number){
        return this.villanos[idx];
      }
      buscarVillano( termino: string): Villano[]{
          let villanosArr: Villano[] = [];
          termino = termino.toLowerCase();

          for (let index = 0; index < this.villanos.length; index++) {
            let heroe = this.villanos[index];
            let nombre = heroe.nombre.toLowerCase();
            if( nombre.indexOf(termino) >=0 ){
              heroe.idx = index;
              villanosArr.push(heroe);
            }
            
          }
          return villanosArr;
      }

}
export interface Villano{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
}
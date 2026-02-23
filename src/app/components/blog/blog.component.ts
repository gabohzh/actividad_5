import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../models/INoticia';

@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  public noticias: INoticia[] = [
    {
      titulo: 'Midnight, el nuevo capítulo de la Saga del alma-mundo',
      imagen: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/5k/5KDJUDYRQBIF1769019489150.png',
      texto: `En Midnight, los jugadores disfrutarán del siguiente capítulo de la Saga del alma-mundo mientras la situación se complica en el mundo de Azeroth. La Presagista, Xal'atath, representa la mayor amenaza, ya que siembra el caos con la invasión que ha desatado sobre el corazón de las tierras natales de los elfos de sangre en el Bosque Canción Eterna.`,
      fecha: '2026-02-22'
    },
    {
      titulo: '¡Llegan Apoya a un streamer y drops de Twitch!',
      imagen: 'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/kk/KKK8QB20QY5F1771556884530.png',
      texto: 'Hazte con la mascota Maya Pescadora al apoyar tus canales de World of Warcraft preferidos regalando 2 suscripciones de Twitch. Además, te llevarás los adornos para los hogares* mrgluche adorable azul Alianza y mrgluche adorable rojo Horda por ver tus canales de Twitch de World of Warcraft preferidos cuando se lance World of Warcraft: Midnight.',
      fecha: '2026-02-23'
    }
  ];

  public nuevaNoticia: INoticia = { titulo: '', imagen: '', texto: '', fecha: '' };

  guardarNoticia() {
    if (!this.nuevaNoticia.titulo || !this.nuevaNoticia.imagen ||
      !this.nuevaNoticia.texto || !this.nuevaNoticia.fecha) {
      alert("¡Error! Todos los campos son obligatorios.");
      return;
    }

    this.noticias.push(this.nuevaNoticia);

    this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
  }
}
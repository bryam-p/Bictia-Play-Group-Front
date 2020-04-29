import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-agregar-perfil',
  templateUrl: './agregar-perfil.component.html',
  styleUrls: ['./agregar-perfil.component.css']
})
export class AgregarPerfilComponent implements OnInit {


  profile: any = {
    name: '',
    avatarUrl: '',
    birthday: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  postProfile() {
    let id = localStorage.getItem('id')
    this.userService.postProfile(id, this.profile).subscribe((data: any) => {
      console.log(data)
    })
  }

  getUrl(url: string) {
    console.log(url)
    switch (url) {
      case '1':
        this.profile.avatarUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwgcj3Khz9ddl3J3bPKtZEeaQ-Ivp4NJ-u98OlHT5ktrK_G6xy&usqp=CAU'
      break;
      case '2':
        this.profile.avatarUrl = 'https://www.al.com/resizer/8r5fqsmflSBq5KtOk5yDXzLKipw=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/news_east_alabama_impact/photo/dora-the-explorerpng-7c414cb2dc723d07.png'
      break;
      case '3':
        this.profile.avatarUrl = 'https://lh3.googleusercontent.com/proxy/mYgvsDOl4XEWZZQVgMaJ8dsDSexyYQkpfDqqj_OnYDAFcMJ4QlUk3XjPwHiehCHY3L05TEqZlDZLdJZr9asor3tXDIf2ALmv3FbgdeVlsUvaUSJnyurLFtepOA'
      break;
      case '4':
        this.profile.avatarUrl = 'https://i.pinimg.com/originals/08/ac/87/08ac87dbf626296177949d1add13700b.gif'
      break;
      case '5':
        this.profile.avatarUrl = 'https://images.vexels.com/media/users/3/128647/isolated/lists/aee14c147b20d3c3244cad76322a06d0-divertidos-dibujos-animados-de-rinoceronte.png'
      break;
      case '6':
        this.profile.avatarUrl = 'https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/0/0f/Ed5c13d68b783d31ba157e4a13d4dfd1.png/revision/latest?cb=20180518111508'
      break;
      case '7':
        this.profile.avatarUrl = 'https://img.cartoongoodies.com/wp-content/uploads/2019/11/Dora-the-Explorer-Boots-sitting.png'
      break;
      case '8':
        this.profile.avatarUrl = 'https://i.pinimg.com/originals/90/ae/14/90ae1493c6603fabf6e0480aab6af234.png'
      break;
      case '9':
        this.profile.avatarUrl = 'https://es.seaicons.com/wp-content/uploads/2016/06/Cars-pixar-4-icon.png'
      break;
      case '10':
        this.profile.avatarUrl = 'https://4.bp.blogspot.com/-bUO4-KRV2CM/UZp5yn5kr7I/AAAAAAAAAEM/HZbcsZMIMOs/s1600/BY+0487MAY+Alenet21tutos+(6).png'
      break;
      case '11':
        this.profile.avatarUrl = 'https://4.bp.blogspot.com/-2akwthftQSY/UZp5yPbkS8I/AAAAAAAAAD4/gKMMymWP958/s1600/BY+0487MAY+Alenet21tutos+(5).png'
      break;
      default:
      break;
    }
    console.log(this.profile.avatarUrl)
  }
}

# Blog Management Projesi

Bu proje bir blog yönetim sistemi olarak tasarlanmıştır. Uygulamamızda kullanıcı listesi(User List), gönderi listesi(Post List), kategori listesi(Category List) ve yorum listesi(Comment List) için olmak üzere 4 listeleme sayfası bulunmaktadır.

## Hedef
*Basit bir blog yönetim sistemi oluşturup verilerimizi eklemek, listelemek, düzenlemek ve
silmek.*

## Konu
*SQL ödevimizde hazırladığımız veritabanına uygun olarak şimdi de bu verileri
yönetebileceğimiz bir yönetim panelini Angular kullanarak tasarlamak istiyoruz. Modellerimiz
şu şekilde olacaktır.*


| User | Post |Category |Comment |
|------|------|------|------|
|userId|postId|categoryId|commentId| 
|username|userId|name|postId| 
|email|categoryId|creationDate|userId| 
|creationDate|title|    |comment|
|isActive|content|      |creationDate|
|        |viewCount|    |isConfirmed |
|        |creationDate| |            |
|        |isPublished|  |            |
    

## Önem Verdiğimiz Kriterler
1. Bileşenlerin tekrar kullanılabilirliği
2. Input, Output kullanımı
3. Servislerin oluşturulması ve component içinde inject edilmesi
4. HTML template kodu içerisinde *ngIf, *ngFor, [(ngModel)] vb. direktiflerin kullanılmış
olması
5. Sayfada istenen verileri gösterirken tercih edilebilecek Pipe kullanımları
6. Sayfada istenen verileri elde etmek için kullanılacak Javascript fonksiyonları (map,
filter, find vb.)
7. Sayfa yeniden yüklendiğinde sonradan eklenen, düzenlenen veya silinen
verilerin yok olması önemli değildir. Yalnızca ilk yüklemeden sonra istenen
verileri gerçekleştirebilmek önemlidir.



# AllianzAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

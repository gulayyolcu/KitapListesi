import React from 'react';

import BookList from './BookList';
import SearchBar from './SearchBar';

class App extends React.Component{
    state={
        books:[
            {
                "name": "Mülksüzler",
                "rating": "8.7",
                "overview": "Bilimkurgu ve fantastik roman türlerinin gelmiş geçmiş en güçlü yazarlarından olan Ursula K. Le Guin, Mülksüzler romanı ile dünya tarihinin en büyük sistem çatışmalarına bütünsel ve alegorik bir bakış açısıyla yaklaşıyor. 1974’te yayımlanan roman, ABD ve Rusya arasındaki Soğuk Savaş’a olan eleştirilerinden dolayı o dönemden günümüze büyük bir ilgiyle okunmaya devam ediyor.",
                "imageURL": "https://i.idefix.com/cache/500x400-0/originals/0000000068234-1.jpg",
                "id": 1
              },
              {
                "name": "Kadimzamanlar ve Diğer Vakitler",
                "rating": "7.7",
                "imageURL": "https://i.idefix.com/cache/500x400-0/originals/0001897270001-1.jpg",
                "overview": "Dört melek tarafından korunan Kadimzamanlar, evrenin kalbidir. Burada zaman farklı akar. Bu ne hükümetlerin, ne generallerin ne de başkanların tarihidir. Kadimzamanlar’ın her sakini kendi zamanının hikâyesini yazar: İnancını yitiren toprak sahibi Popielski, geçmişinden kopmak istemeyen Michał, kendini ormana hapseden...",
                "id": 2
              },
              {
                "name": "Şeker Portakalı",
                "rating": "8.7",
                "overview": "Acı dolu bir hayat sürdürmek ve bunu yaşamın olağan seyri gibi kabul etmek, ta ki hayattaki en gerçek ve karşı konulamaz acının ne olduğunu öğrenene kadar… Şeker Portakalı; yoksulluk ve sevgisizlik içinde yaşayan küçük Zeze’nin dünyasını, okuyucusuna yalnızca minik bir çocuğun gözünden değil, evrensel bir hakikat penceresinden sunuyor.Brezilyalı yazar... ",
                "imageURL": "https://i.idefix.com/cache/500x400-0/originals/0000000064031-1.jpg",
                "id": 3
              },
              {
                "name": "Çernobil Duası-Geleceğin Tarihi",
                "rating": "8.5",
                "overview": "2015 Nobel Edebiyat Ödülü’nün sahibi Svetlana Aleksiyeviç’in büyük eserlerinden Çernobil Duası, Çernobil Nükleer Felaketi ve sonrasında yaşananlara dair can acıtıcı bir sözlü tarih çalışması…İsveç Akademisi, Svetlana Aleksiyeviç’e Nobel Ödülü verdiğinde yazarın “yeni bir edebi tür” yarattığını belirtmiş, eserlerini de “duyguların ve ruhun bir tarihi” sözcükleriyle betimlemişti.",
                "imageURL": "https://i.idefix.com/cache/500x400-0/originals/0001699484001-1.jpg",
                "id": 4
              },
              {
                "name": "Bir Nefeste Dünya Tarihi",
                "rating": "8.6",
                "imageURL": "https://i.idefix.com/cache/500x400-0/originals/0000000580226-1.jpg",
                "overview": "M.Ö. 3500'den 1945'e kadar kronolojik olarak düzenlenmiş; Avrupa, Kuzey ve Güney Amerika, Okyanusya, Ortadoğu ve Orta Asya olarak bölgelere göre ayrılmış, bir nefeste okuyacağınız bir dünya tarihi kitabı.Farkında olsak da olmasak da, yaşadığımız dünya, tarihimiz tarafından şekillendirilmiştir. Tarih, aynı anda ortak insanlığın hem bir kaydı hem de bütünlüğünü sağlayan...",
                "id": 5
              },
              {
                "name": "Yamuk Bakmak",
                "rating": "8.8",
                "imageURL": "https://i.idefix.com/cache/500x400-0/originals/0000000154755-1.jpg",
                "overview": "Hitchcock filmleri, Stephen King, korku, bilimkurgu ve dedektif öyküleri, popüler romantik romanlar, günümüz kitle kültürü, Stalinist Biçimsel Demokrasi, sonra Lacan, Hegel, Kant, Sade ve diğerleri... Hepsi bir arada, yan yana. İçinde hep rahat edegeldiğimiz düşünme ve açıklama çerçevelerinin otomatikliğinin sekteye uğradığı anlarda hissettiğimiz sezdiğimiz, ama en aynı anda ortak insanlığın hem bir kaydı..",
                "id": 6
              }
        ],
        searchBook:""
    }

    deleteBook=(book)=>{
        const newBookList=this.state.books.filter(
            b=>b.id!==book.id
        )
        this.setState({
            books:newBookList
        })
    }

    searchBook=(event)=>{
        this.setState({
            searchBook:event.target.value
        })
    }

    render(){

        let filteredBook=this.state.books.filter(
            (book)=>{
                return book.name.toLowerCase().indexOf(this.state.searchBook.toLowerCase())!==-1
            }
        )

        return(
            <div className="container mx-auto mt-5 mb-5">
                <SearchBar searchBookProp={this.searchBook}/>
                <div className="h-auto grid grid-rows-1 gap-4">
                
                        <BookList books={filteredBook} deleteBookProp={this.deleteBook}/>
              
                </div>
                
            </div>
        )
    }
}

export default App;
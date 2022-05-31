import Navigo from 'navigo';
import Header from './components/Header';
import Footer from './components/Footer';
// import bootstrap;
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import About from './pages/about';
import News from './pages/news';

//khởi tạo router
const router = new Navigo('/', { linksSelector: 'a' });




function render(Content) {
    // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Test</button>';

    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = Content;
    document.querySelector('#footer').innerHTML = Footer.render();
}

router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(),

});
router.resolve();


// render();




// arrow function: const ten_ham = () => {};
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>Content</div>';
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
};

function sum(a, b) {
    return a + b;
}; // cú pháp thông thường
const sum1 = (a, b) => {
    return a + b;
}; // arrow function có return
const sum2 = (a, b) => a + b; // nếu chỉ có return

const display = a => console.log(a); // nếu chỉ có 1 tham số


const printA = async () => {
    // gọi hàm setValueA để chờ nhận kết quả [1, 2, 3]
    const result = await setValueA(); // giá trị được truyền vào trong resolve()
    // chờ setValueA thực thi xong và trả về kq [1,2,3];
    // thì mới chạy dòng tiếp theo là console.log
    console.log('chờ result nhận kết quả rồi mới ra log này', result);
    result.push(4);
    console.log('sau khi thực hiện push ra kq này:', result);
};

printA();



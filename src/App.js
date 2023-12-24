import "./App.css";
import Game from "./components/tictactoe/Game";
// import Counter from "./components/counter/Counter";
// import YoutubeList from "./components/youtube/YoutubeList";
// import Toggle from "./toggle/Toggle";
/**
 * elements = <div id="root>Hello World</div>
 * elements = React.createElement('div', '{id: root}', 'Hello World')
 * function createElement(elementType,props, ...children)
 * elementType: là các thẻ jsx (giống HTML): div, a, img,..
 * props: là các thuộc tính của thẻ jsx: className, id, src,...
 * ...children: các phần tử con của Element
 *
 * elements2 = (<div>
 * <span>Hello</span> <spaN>World!</spaN>
 * </div>)
 *
 * elements2 = React.createElement('<div',{
 * children: [
 *      React.createElement('span', null, Hello),
 *      ' ',
 *      React.createElement('span',null, World!)
 * ]
 * })
 * Dùng {} để truyền biến hoặc function vào trong return của react
 */
// function Feature() {
//   return (
//     <div className="feature">
//       <img alt="" className="feature-image" />
//       <h3 className="feature-title">Hello Everyone</h3>
//       <p className="feature-description">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
//         deleniti a sed mollitia. Vero rem velit, illo aperiam ipsam officiis
//         unde odit nulla et fugiat quas perferendis cupiditate! Accusamus,
//         fugiat.
//       </p>
//     </div>
//   );
// }

function App() {
  // const name = "Tanas";
  // function fullName(firstName, lastName) {
  //   return `${firstName} ${lastName}`;
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>Hello {name === "Tanas" ? "Tấn" : "Huỳnh Phước"}</h1>
  //       <h2>{fullName("Tan", "Huynh Phuoc")}</h2>
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // const name = "Tanas";
  return (
    <div>
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      <Game></Game>
    </div>
    /* <div>
      <YoutubeList>
        {/* Props children: là các phần tử nằm trong component, không phải là các thuộc tính như props thường
        VD: <YoutubeItem id="1" name="PopsKid"></YoutubeItem> => id, name là Props thường
            <YoutubeItem><p>Hello</p></YoutubeItem> => thẻ p là props children, muốn gọi props dùng syntax: props.children

            function YoutubeItem (props) {
              return (
                {props.children}
                <h3>{props.name}</h3>
              )
            }
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas
          quia minima beatae! Delectus ab doloremque, eligendi, eveniet
          consequuntur commodi consectetur fugit quisquam non saepe neque modi
          nisi unde cum?
        </h2>
        {name}
      </YoutubeList>
    </div>
    <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */
    /* <YoutubeItem
        image="https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D"
        avatar="https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww"
        title="Learning React"
        author="Tanas"
      ></YoutubeItem>
      <YoutubeItem
        image="https://media.istockphoto.com/id/1401478203/photo/3d-rendering-of-cyberpunk-ai-circuit-board-technology-background-central-computer-processors.webp?b=1&s=170667a&w=0&k=20&c=Qk7GKABg6lYLm1PSsn5SVt_xmA33SlOjPlEp-x4NHKg="
        avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
        title="NestJS and everywhere"
        author="David"
      ></YoutubeItem>
      <YoutubeItem
        image="https://media.istockphoto.com/id/1469742188/photo/chip-motherboard-and-city-model.webp?b=1&s=170667a&w=0&k=20&c=4InSu2zcaQqboUPY9KGEZZxNu37DR8MoKhXqOh7FO1U="
        avatar="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww"
        title="Solidity Blockchain"
        author="Tanas"
      ></YoutubeItem>
      <YoutubeItem
        image="https://media.istockphoto.com/id/1479214800/photo/3d-abstract-speed-light-flow-through-the-city-with-gradient-and-aesthetic-intricate-lighting.webp?b=1&s=170667a&w=0&k=20&c=IaQCszEpOuAgBI1N-IWy5qqeKl63qEt0DowmRCg5h-A="
        avatar="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        title=".NET API"
        author="Tanas"
      ></YoutubeItem> */
  );
}
// props: viết tắt của properties, dùng để truyền tham số từ bên ngoài vào bên trong jsx,
// là một object chứa nhiều cặp key value, mỗi cặp là tên và giá trị của tham số truyền vào
/***
 * Ta có thể hiểu nó như một function có tham số, khi gọi hàm thì phải truyền tham số vào
 * VD: function Example(props) {
 *  return (
 * <div>{props.name}</div>
 * (ở dưới ta truyền name có value là Nguyen Van A nên sẽ hiện props.name=Nguyen Van A)
 * )
 * }
 *
 * function Display() {
 *    return {
 *      <Example name="Nguyen Van A"></Example> => <div>Nguyen Van A</div>
 *    }
 * }
 *
 * Để css trong reactjs có 2 cách: inline và className. Với inline ta sử dụng cú pháp: style={{tên thuộc tính css (dạng camelCase: giá trị)}}
 * Với className thì giống như css external.
 */
export default App;

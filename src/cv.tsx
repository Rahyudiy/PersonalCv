import "./cvku.css";
const Foto = require("./pict/Profil.jpg");
const icn1 = require("./pict/bag.svg");
const icn2 = require("./pict/id.svg");
const icn3 = require("./pict/phone.svg");
const icn4 = require("./pict/email.svg");
const icn5 = require("./pict/loc.svg");
const icn6 = require("./pict/doc.svg");

function Cv() {
  return (
    <div>
      <div className="cvku">
        <div id="pict">
          <img src={Foto} className="Profile"></img>
          <div id="line"></div>
        </div>

        <div className="nama">
          <h1>
            <span>Gde Ngurah </span>Yudiantara
          </h1>
        </div>

        <div id="title">
          <h2>Software Engineering Major.</h2>
        </div>

        <div className="deskripsi">
          <div id="profil">
            <img src={icn2}></img>
            <h1>PROFIL</h1>
            <p>
              Student from SMK Negeri 1 Denpasar majoring in software
              engineering. Confident communicator, creative thinker, and
              innovative creator to develop software. I like to learn about
              programming especially in web design. I am also interested in web
              development,graphic design and investment. I have experience
              organizing entrepreneur as a creative division in a vocational
              high school.
            </p>
          </div>

          <div id="edukasi">
            <img src={icn1}></img>
            <h1>EDUCATION</h1>
            <h2>SMK NEGERI 1 DENPASAR</h2>
            <p>Software Engineering Major (2020-2024)</p>
          </div>
          <div id="line3"></div>
          <div id="pengalaman">
            <img src={icn6}></img>
            <h1>EXPERIENCE & SKILL</h1>
            <div className="list">
              <ul>
                <li>
                  <h1>Wirausaha Siswa Skensa</h1>
                  <p>
                    Creative Devision( Create new innovation of
                    product,Cooperate with marketing division to make
                    interesting instagram advertising,Participated in making
                    incense from the beginning to the end of the process
                    (product packaging stage). )
                  </p>
                </li>

                <li>
                  <h1>Skill </h1>
                  <p>
                    Figma, Canva, HTML, CSS, Javascript, WordPress, PHP, Java,
                    MySQL, Github, Microsoft Office (Word, Power Point, and
                    Excel).
                  </p>
                </li>
                <li>
                  <h1>Language</h1>
                  <p>Indonesia, English</p>
                </li>
              </ul>
            </div>
          </div>

          <div id="line2"></div>

          <div id="contact">
            <ul>
              <li>
                <img src={icn3}></img>
                <h2>No Hp</h2>
                <p>089 605 679 977</p>
              </li>

              <li>
                <img src={icn4}></img>
                <h2>Email</h2>
                <p>gdengurahyudiantara@gmail.com</p>
              </li>

              <li>
                <a href="https://goo.gl/maps/3uSZuNgJaCT4LordA">
                  <img src={icn5}></img>
                </a>
                <h2>Addres</h2>
                <p>Gatot subroto street block 11 no 17x</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;

export const Note = () => {
  return (
    <div className="note">
      <h2>Note</h2>
      <p>For numbers up to 3999, we Romans generally used:</p>
      <table className="table">
        <caption>Individual decimal places</caption>
        <tbody>
          <tr>
            <th></th>
            <th>Thousands</th>
            <th>Hundreds</th>
            <th>Tens</th>
            <th>Units</th>
          </tr>
          <tr>
            <td>1</td>
            <td>M</td>
            <td>C</td>
            <td>X</td>
            <td>I</td>
          </tr>
          <tr>
            <td>2</td>
            <td>MM</td>
            <td>CC</td>
            <td>XX</td>
            <td>II</td>
          </tr>
          <tr>
            <td>3</td>
            <td>MMM</td>
            <td>CCC</td>
            <td>XXX</td>
            <td>III</td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td>CD</td>
            <td>XL</td>
            <td>IV</td>
          </tr>
          <tr>
            <td>5</td>
            <td></td>
            <td>D</td>
            <td>L</td>
            <td>V</td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>
            <td>DC</td>
            <td>LX</td>
            <td>VI</td>
          </tr>
          <tr>
            <td>7</td>
            <td></td>
            <td>DCC</td>
            <td>LXX</td>
            <td>VII</td>
          </tr>
          <tr>
            <td>8</td>
            <td></td>
            <td>DCCC</td>
            <td>LXXX</td>
            <td>VIII</td>
          </tr>
          <tr>
            <td>9</td>
            <td></td>
            <td>CM</td>
            <td>XC</td>
            <td>IX</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <p>
        But when numbers exceeded that, it was nessesary to invent some simplification. It
        was nessesary to avoid adding more letters to system or ending up with something
        like that:
      </p>
      <p>
        <i>{'15486 => MMMMMMMMMMMMMMMCDLXXXVI'}</i>
      </p>
      <h3>Apostrophus</h3>
      <p>
        One of the working solutions, that Romans have developed, is{' '}
        <i>
          <b>Apostrophus</b>
        </i>
        :
      </p>
      <p>
        {`Using the apostrophus method, 500 is written as IↃ, while 1,000 is written as CIↃ. This system of encasing numbers to denote thousands (imagine the Cs and Ↄs as parentheses) had its origins in Etruscan numeral usage.

      Each additional set of C and Ↄ surrounding CIↃ raises the value by a factor of ten: CCIↃↃ represents 10,000 and CCCIↃↃↃ represents 100,000. Similarly, each additional Ↄ to the right of IↃ raises the value by a factor of ten: IↃↃ represents 5,000 and IↃↃↃ represents 50,000. Numerals larger than CCCIↃↃↃ do not occur.`}
      </p>

      <p>
        This topic extends in the wikipedia article, but for simplicity I&apos;ve handled
        larger numbers in this manner:
      </p>
      <div className="system-example-grid">
        <div>
          <b>IↃ</b> = <b>D</b> = 500
        </div>
        <div>
          <b>CIↃ</b> = <b>ↀ</b> = 1,000
        </div>
        <div>
          <b>IↃↃ</b> = <b>ↁ</b> = 5,000
        </div>
        <div>
          <b>CCIↃↃ</b> = <b>ↂ</b> = 10,000
        </div>
        <div>
          <b>IↃↃↃ</b> = <b>ↇ</b> = 50,000
        </div>
        <div>
          <b>CCCIↃↃↃ</b> = <b>ↈ</b> = 100,000
        </div>
      </div>

      <h3>Vinculum</h3>

      <p>
        This system came to use in late Roman Republic and continued into Middle Ages. It
        vastly simplified handling larger numbers by putting bars, or "overlines" at the
        top of numbers, indicating multiplication by x1000:
      </p>

      <div className="system-example-grid">
        <div>
          <b>D</b> = 500
        </div>
        <div>
          <b>M</b> = 1,000
        </div>
        <div>
          <b>
            <span className="top-line">V</span>
          </b>{' '}
          = 5,000
        </div>
        <div>
          <b>
            <span className="top-line">X</span>
          </b>{' '}
          = 10,000
        </div>
        <div>
          <b>
            <span className="top-line">L</span>
          </b>{' '}
          = 50,000
        </div>
        <div>
          <b>
            <span className="top-line">C</span>
          </b>{' '}
          = 100,000
        </div>
        <div>
          <b>
            <span className="top-line">D</span>
          </b>{' '}
          = 500,000
        </div>
        <div>
          <b>
            <span className="top-line-double">I</span>
          </b>{' '}
          = 1,000,000
        </div>
        <div>
          <b>
            <span className="top-line-double">V</span>
          </b>{' '}
          = 5,000,000
        </div>
        <div>
          <b>
            <span className="top-line-double">X</span>
          </b>{' '}
          = 10,000,000
        </div>
        <div>
          <b>
            <span className="top-line-double">L</span>
          </b>{' '}
          = 50,000,000
        </div>
        <div>
          <b>
            <span className="top-line-double">C</span>
          </b>{' '}
          = 100,000,000
        </div>
        <div>
          <b>
            <span className="top-line-double">D</span>
          </b>{' '}
          = 500,000,000
        </div>
        <div>
          <b>
            <span className="top-line-double">M</span>
          </b>{' '}
          = 1000,000,000
        </div>
      </div>

      <p>
        All info and descriptions come from, or are based of{' '}
        <a
          href="https://en.wikipedia.org/wiki/Roman_numerals"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia article
        </a>{' '}
        and{' '}
        <a
          href="https://www.tuomas.salste.net/doc/roman/converter.shtml"
          target="_blank"
          rel="noreferrer"
        >
          Tuomas Salste
        </a>{' '}
      </p>
    </div>
  );
};

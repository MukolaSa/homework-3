import './Statistics.css';

function getRandomColor() {
  const colors = ['#00bbf9', '#9b5de5', '#f15bb5', '#70d6ff', '#fee440'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <div className="container">
        <h2 class="title">Upload Status</h2>
        <ul class="stat-list">
          {stats.map(stat => (
            <li
              className="item"
              key={stat.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{stat.label} </span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
        .stat-list {
          display: flex;
          align-items: flex-end;
          list-style: none;
          padding: 0;
        }

        .item {
          width: 80px;
          height: 80px;
          background-color: ${getRandomColor()};
          text-align: center;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        span {
          color: white
        }

        .label {
            font-size: 20px;
            margin-bottom: 8px;
        }

        .percentage {
            font-size: 30px;
        }

        .title {
            color: #0d3b66;
            padding-top: 30px;
            padding-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background-color: #fff;
            margin-left: 50px;
        }
        `}
      </style>
    </section>
  );
};

export default Statistics
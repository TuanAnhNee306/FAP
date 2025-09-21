import React, { useState } from "react";
import "./Schedule.css";

// Dữ liệu lịch học chỉ hiển thị các môn vào Thứ Bảy, với trạng thái "(not now)"
// Cập nhật để cả MAD101 và PRJ301 đều nằm trong Slot 3-4
const scheduleData = {
  "week1": {
    "SAT\n27/09": {
      "Slot 1-2": null, // Không có môn học nào ở Slot 1-2
      "Slot 3-4": [
        {
          subject: "MAD101",
          location: "at P.123",
          status: "(not now)",
          time: "(12:50-14:55)",
        },
        {
          subject: "PRJ301",
          location: "at P.203",
          status: "(not now)",
          time: "(15:15-17:15)",
        },
      ],
    },
  },
  "week2": {
    "SAT\n04/10": {
      "Slot 1-2": null,
      "Slot 3-4": [
        {
          subject: "MAD101",
          location: "at P.123",
          status: "(not now)",
          time: "(12:50-14:55)",
        },
        {
          subject: "PRJ301",
          location: "at P.203",
          status: "(not now)",
          time: "(15:15-17:15)",
        },
      ],
    },
  },
  "week3": {
    "SAT\n11/10": {
      "Slot 1-2": null,
      "Slot 3-4": [
        {
          subject: "MAD101",
          location: "at P.123",
          status: "(not now)",
          time: "(12:50-14:55)",
        },
        {
          subject: "PRJ301",
          location: "at P.203",
          status: "(not now)",
          time: "(15:15-17:15)",
        },
      ],
    },
  },
  "week4": {
    "SAT\n18/10": {
      "Slot 1-2": null,
      "Slot 3-4": [
        {
          subject: "MAD101",
          location: "at P.123",
          status: "(not now)",
          time: "(12:50-14:55)",
        },
        {
          subject: "PRJ301",
          location: "at P.203",
          status: "(not now)",
          time: "(15:15-17:15)",
        },
      ],
    },
  },
};

const weeksData = [
  {
    id: "week1",
    label: "22/09 to 28/09",
    days: ["MON\n22/09", "TUE\n23/09", "WED\n24/09", "THU\n25/09", "FRI\n26/09", "SAT\n27/09", "SUN\n28/09"],
  },
  {
    id: "week2",
    label: "29/09 to 05/10",
    days: ["MON\n29/09", "TUE\n30/09", "WED\n01/10", "THU\n02/10", "FRI\n03/10", "SAT\n04/10", "SUN\n05/10"],
  },
  {
    id: "week3",
    label: "06/10 to 12/10",
    days: ["MON\n06/10", "TUE\n07/10", "WED\n08/10", "THU\n09/10", "FRI\n10/10", "SAT\n11/10", "SUN\n12/10"],
  },
  {
    id: "week4",
    label: "13/10 to 19/10",
    days: ["MON\n13/10", "TUE\n14/10", "WED\n15/10", "THU\n16/10", "FRI\n17/10", "SAT\n18/10", "SUN\n19/10"],
  },
];

const Schedule = () => {
  const [selectedWeekId, setSelectedWeekId] = useState(weeksData[0].id);
  const selectedWeek = weeksData.find(week => week.id === selectedWeekId);
  const handleWeekChange = (event) => {
    setSelectedWeekId(event.target.value);
  };

  const renderSingleItem = (item) => {
    const statusClass = "not-now";
    const itemClass = "schedule-item";
    return (
      <div className={itemClass}>
        <span className="subject-code">{item.subject}</span>
        <div>
          <a href="#" className="material-link">View Materials</a>
          <a href="#" className="edunext-link">EduNext</a>
        </div>
        <div className="location">{item.location}</div>
        <div className={`status ${statusClass}`}>{item.status}</div>
        <div className="time-badge">{item.time}</div>
      </div>
    );
  };

  const renderScheduleItems = (items) => {
    if (!items) {
      return "-";
    }
    if (Array.isArray(items)) {
      return items.map((item, index) => (
        <div key={index} className="multiple-items-container">
          {renderSingleItem(item)}
        </div>
      ));
    }
    return renderSingleItem(items);
  };

  const currentSchedule = scheduleData[selectedWeekId] || {};

  return (
    <div className="schedule-container">
      <h2>Activities for AnhDTSE180446 (Đặng Tuấn Anh)</h2>
      <p className="note">
        Note: These activities do not include extra-curricular activities, such as club activities...
        <br />
        <strong>Lịch học này được lặp lại hằng tuần.</strong>
      </p>
      <div className="controls">
        <select value={selectedWeekId} onChange={handleWeekChange}>
          {weeksData.map(week => (
            <option key={week.id} value={week.id}>{week.label}</option>
          ))}
        </select>
      </div>

      <table className="schedule">
        <thead>
          <tr>
            <th></th>
            {selectedWeek.days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Slot 1<br/>Slot 2</td>
            {selectedWeek.days.map(day => (
              <td key={day}>
                {renderScheduleItems(currentSchedule[day]?.["Slot 1-2"])}
              </td>
            ))}
          </tr>
          <tr>
            <td>Slot 3<br/>Slot 4</td>
            {selectedWeek.days.map(day => (
              <td key={day}>
                {renderScheduleItems(currentSchedule[day]?.["Slot 3-4"])}
              </td>
            ))}
          </tr>
          <tr>
            <td>Slot 5<br/>Slot 6</td>
            {selectedWeek.days.map(day => (
              <td key={day}>
                {renderScheduleItems(currentSchedule[day]?.["Slot 5-6"])}
              </td>
            ))}
          </tr>
          <tr>
            <td>Slot 7<br/>Slot 8</td>
            {selectedWeek.days.map(day => (
              <td key={day}>
                {renderScheduleItems(currentSchedule[day]?.["Slot 7-8"])}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="legend">
        <p><b>Ghi chú:</b> Các hoạt động trong bảng dưới không bao gồm hoạt động ngoại khóa, ví dụ như hoạt động câu lạc bộ...</p>
        <p>Các phòng tất cả đều bằng **<a href="#">tên nhà_cán_bộ</a>** trên **<a href="#">bản đồ khu vực</a>**</p>
        <p><b>(attended)</b> AnhDTSE180446 had attended this activity / Đặng Tuấn Anh đã tham gia hoạt động này</p>
        <p><b>(absent)</b> AnhDTSE180446 had NOT attended this activity / Đặng Tuấn Anh đã vắng mặt buổi này</p>
        <p><b>(-)</b> no data was given / chưa có dữ liệu</p>
      </div>
    </div>
  );
};

export default Schedule;
import React from "react";
import Form from "./Form";
import AttendeeList from "./AttendeeList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Attendee: [
        {
          id: 1,
          firstName: "Malcom",
          lastName: "Reynolds",
          email: "captain@serenity.com",
          shirt: "L",
          skillLevel: "expert",
        },
        {
          id: 2,
          firstName: "Zoe",
          lastName: "Washburn",
          email: "zoew@gmail.com",
          shirt: "S",
          skillLevel: "intermediate",
        },
        {
          id: 3,
          firstName: "Hoban",
          lastName: "Washburn",
          email: "itswash@gmail.com",
          shirt: "M",
          skillLevel: "beginner",
        },
        {
          id: 4,
          firstName: "Jayne",
          lastName: "Cobb",
          email: "jayne@jaynestown.org",
          shirt: "L",
          skillLevel: "beginner",
        },
        {
          id: 5,
          firstName: "Kaylee",
          lastName: "Frye",
          email: "kaylee@serenity.com",
          shirt: "S",
          skillLevel: "expert",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <body>
          <div id="app">
            <div class="main">
              <div class="attendee-form">
                <h2>Register Attendee</h2>
                <Form />
              </div>
              <div class="attendees">
              <AttendeeList attendees={this.state.Attendee} filter={'beginner'}/>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;

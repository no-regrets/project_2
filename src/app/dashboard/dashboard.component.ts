import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Session } from '../_services/session/session';
import { SessionService } from '../_services/session/session.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  session = new Session();

  constructor(private sessionService: SessionService) { }
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };

  drinks: number = 0;
  // LastName: string = '';

  // changeName():void{
  //     this.FirstName = 'New First Name';
  //     this.LastName = 'New Last Name';
  // }
  drinkcounter(timestart) {
    this.drinks += 1
    console.log(this.drinks)
    this.addbac("male", 100)
    this.decayBac()
  }

  bac: number = 0;
  currentbac: number = 0.000;

  addbac(sex, weight){
    if(sex === "male"){
        if(weight >= 90 && weight < 110){
            this.bac += .038
        }
        if(weight >= 110 && weight < 130){
            this.bac += .031
        }
        if(weight >= 130 && weight < 150){
            this.bac += .027
        }
        if(weight >= 150 && weight < 170){
            this.bac += .023
        }
        if(weight >= 170 && weight < 190){
            this.bac += .021
        }
        if(weight >= 190 && weight < 210){
            this.bac += .019
        }
        if(weight >= 210 && weight < 230){
            this.bac += .017
        }
        if(weight >= 230){
            this.bac += .016
        }
        
    }
    if(sex === "female"){
        if(weight >= 90 && weight < 110){
            this.bac += .045
        }
        if(weight >= 110 && weight < 130){
            this.bac += .038
        }
        if(weight >= 130 && weight < 150){
            this.bac += .032
        }
        if(weight >= 150 && weight < 170){
            this.bac += .028
        }
        if(weight >= 170 && weight < 190){
            this.bac += .025
        }
        if(weight >= 190 && weight < 210){
            this.bac += .023
        }
        if(weight >= 210 && weight < 230){
            this.bac += .021
        }
        if(weight >= 230){
            this.bac += .019
        }
    }
    console.log(this.bac)
        this.timeBac()
}


  decayBac() {
    moment().format();
    console.log(this.bac)
    var current = moment()
    var timestart = this.useable
    var difference = timestart.diff(current, "minutes")
    console.log(difference)
    difference *= (.015 / 60)
    this.currentbac = this.bac
    this.currentbac += difference
    if (this.currentbac < 0) {
      this.currentbac = 0
    }
    this.currentbac = this.currentbac.toFixed(4)
    console.log(this.bac)

  }
  TimeAt: string = '';

  timeBac() {
    console.log(this.bac)
    //var moment = require('moment');
    moment().format();
    var minutes = 0
    //bac reduces at .015 an hour
    //legally sober at .08 bac
    //need to take start time of session, then find the amount of time until bac = 0 at the pace of .015 an hour.
    var bacReductionPerMinute = .015 / 60
    var test = this.bac
    console.log(bacReductionPerMinute)
    while (test > .08) {
      test -= bacReductionPerMinute
      minutes += 1
    }
    console.log(minutes)

    //takes current time then adds the amount of minutes until sober, formats into hour:minutes AM/PM
    var TimeOfSober = moment().add(minutes, "minutes").format("hh:mm a")
    console.log(TimeOfSober)
    this.TimeAt = TimeOfSober
    //finds difference in minutes between current time and time will sober, though all of this is unnecessary since the minutes variable already knows this information....
    // var TimeTillSober = moment().add(minutes, "minutes")
    // var current = moment()
    // console.log(TimeTillSober.diff(current, "minutes"))

  }
  useable: number = '';
  startTime: number = '';
  startSession() {
    //var moment = require('moment');
    moment().format()
    let foreignUser = localStorage.getItem('userID');
    console.log(foreignUser);
    let endedAt = null;
    var timestart = moment();
    this.startTime = timestart.format("hh:mm a");
    this.useable = timestart
    this.save(endedAt, foreignUser);
    console.log("start session timestart" + timestart)
    return timestart
  }

  // endSession() {
  //   let endedAt = moment.now();
  //   let currentSession = this.sessionService.getMaxSession();
  //   return this.sessionService.getSessions()
  //   .subscribe(
  //     sessions => {
  //       this.session=sessions
  //     }
  //   );
  //   console.log(currentSession);
  // }

  private save(endedAt, localID): void {

    if (localID) {
    // set up session info
    this.session.drinkGoal=500;
    this.session.createdAt=moment().toDate();
    this.session.endedAt = endedAt;
    this.session.maxBAC = 40.0;
    console.log("this is my local id" + localID);
    this.session.UserId = localID;

    // Set session Id for tracking
    this.sessionService.addSession(this.session)
      .subscribe(sess =>
        localStorage.setItem('sessionId', sess.id.toString())
      );
    }
    else {
      console.log("Must be logged in!");
    }
  }

  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ]
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    }

    var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.startAnimationForLineChart(dailySalesChart);


    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    }

    var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);



    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    var datawebsiteViewsChart = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

      ]
    };
    var optionswebsiteViewsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };
    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  }

}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        
        jQuery(document).on("submit", "#dayTransform", jQuery.proxy(this.calculateTheDifference, this));
        jQuery(document).on("click", "#resetBtn", jQuery.proxy(this.resetForm, this));
    },

   
    calculateTheDifference: function(){
        jQuery.mobile.changePage("#two", {
            transition: 'none',
            changeHash: true
        });
        var birthDate = new Date(jQuery("#birthDate").val());
           
        var todayDate = new Date();
            
        var diff = this.calculate(birthDate,todayDate);
        jQuery("#result").html("Hello "+jQuery("#firstName").val()+" "+jQuery("#lastName").val()+"</br> Your age in days is: "+diff);
        return false;
    },
    //function that calculate the difference by day etween two dates
     calculate: function( date1, date2 ) {
      //Get 1 day in milliseconds
      var one_day=1000*60*60*24;

      // Convert both dates to milliseconds
      var date1_ms = date1.getTime();
      var date2_ms = date2.getTime();

      // Calculate the difference in milliseconds
      var difference_ms = date2_ms - date1_ms;

      // Convert back to days and return
      return Math.round(difference_ms/one_day); 
    },
    
    resetForm: function()
    {
        jQuery("#firstName").val("");
        jQuery("#lastName").val("");
        jQuery("#birthDate").val("");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', jQuery.proxy(this.onDeviceReady, this), false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        try{
           var parentElement = document.getElementById(id);
           var listeningElement = parentElement.querySelector('.listening');
           var receivedElement = parentElement.querySelector('.received');

           listeningElement.setAttribute('style', 'display:none;');
           receivedElement.setAttribute('style', 'display:block;');
        }catch(exception){
            console.log(exception);
        }
    }
}.initialize();

const {GetSessions,GetSessionPlayers,GetSessionCoach,CreateTeam,future,update,unmarked_data,unmarked_players,updatescore,Unmarked,addTeam,getTeam,addTeamMatches,addTeamMatchesDet,getTeamDetails,deleteTeam,performanceBowl,getAllPlayers,feedback,Attendance,intro,performanceFld,GetCouncelling,GetEvents,performance,GetEventDetails,GetPayments,GetMatchPlayers,GetMatchCoach,GetRanking} =require("./player.service");
const {compareSync}=require("bcrypt");
const jwt =require("jsonwebtoken");
module.exports = {
    //get session details for payers
    GetSessions: (req,res) =>{
        const body = req.body;
        console.log(req.body.month)
        GetSessions(body, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                console.log("jj")
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results
                    }); 

                    
                }
                
            }
            
        });
        
    },

   GetSessionPlayers: (req,res) =>{ 
        const body = req.body;
        console.log("")
        // let myArray = {}
        GetSessionPlayers(body.session_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                
                if(results){
                    
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
            
        });
        
    },
    GetSessionCoach: (req,res) =>{ 
        const body = req.body;
        console.log("")
        GetSessionCoach(body.session_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },

    GetCouncelling: (req,res) =>{ 
        const body = req.body;
        console.log("")
        GetCouncelling(body.session_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },

    GetEvents: (req,res) =>{ 
        const body = req.body;
        console.log("hi")
        GetEvents(body.session_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    GetEventDetails:  (req,res) =>{ 
        const body = req.body;
        console.log(body.eventId)
        GetEventDetails(body.eventId, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    console.log(results)
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    GetPayments:(req,res) =>{ 
        const body = req.body;
        console.log(body.user_id)
        GetPayments(body.user_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    console.log(results)
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    GetMatchPlayers: (req,res) =>{ 
        const body = req.body;
        console.log("")
        GetMatchPlayers(body, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    
    GetMatchCoach: (req,res) =>{ 
        const body = req.body;
        console.log("")
        GetMatchCoach(body.session_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    GetRanking: (req,res) =>{ 
        const body = req.body;
        console.log("kk")
        GetRanking(body.catagory,body.format, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    performance: (req,res) =>{ 
        const body = req.body;
        console.log("kk")
        performance(body.user_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    performanceFld: (req,res) =>{ 
        const body = req.body;
        console.log("kk")
        performanceFld(body.user_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    performanceBowl: (req,res) =>{ 
        const body = req.body;
        console.log("kk")
        performanceBowl(body.user_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    intro: (req,res) =>{ 
        const body = req.body;
        console.log("kk")
        intro(body.user_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    Attendance: (req,res) =>{ 
        const body = req.body;
        console.log("kk")
        Attendance(body.user_id,body.month, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },

    feedback: (req,res) =>{ 
        const body = req.body;
        console.log("kk")
        feedback(body.user_id,body.session_id, (err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    getAllPlayers: (req,res) =>{ 
        console.log("kk")
        getAllPlayers((err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },

    CreateTeam: (req,res) =>{ 
        console.log(req.body.team)
        console.log(req.body.date)
        CreateTeam(req.body.team,req.body.date,req.body.players,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },

    getTeam: (req,res) =>{ 
        getTeam((err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    getTeamDetails: (req,res) =>{ 
        getTeamDetails(req.body.team_id,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    deleteTeam: (req,res) =>{ 
        deleteTeam(req.body.team_id,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    addTeamMatches: (req,res) =>{ 
        addTeamMatches((err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    addTeamMatchesDet: (req,res) =>{ 
        addTeamMatchesDet(req.body.match_id,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    addTeam: (req,res) =>{ 
        addTeam(req.body.match_id,req.body.team,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    future: (req,res) =>{ 
        future((err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },

    update: (req,res) =>{ 
        update(req.body.match_id,req.body.team,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    Unmarked: (req,res) =>{ 
        Unmarked((err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    unmarked_data: (req,res) =>{ 
        unmarked_data(req.body.match_id,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    unmarked_players: (req,res) =>{ 
        unmarked_players(req.body.match_id,(err,results)=>{
            
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },
    updatescore: (req,res) =>{ 
        console.log(req.body)
        updatescore(req.body.user_id,req.body.match_id,req.body.bat_runs,req.body.bat_balls,req.body.six,req.body.four,req.body.overs, req.body.runs, req.body.balls, req.body.ht,req.body.wkt, req.body.NB,req.body.maiden, req.body.WB, req.body.runOut, req.body.catches,req.body.playedd,req.body.notOut,(err,results)=>{
            if(err) {
                console.log(err);
                return
            }
            if(results[0]==undefined){
                return res.json({
                    success: 0,
                    data: results,
                });
            }
            else{
                if(results){
                    return res.json({
                        success: 1,
                        data: results,
                    });
                }
                
            }
            
        });
        
    },

}
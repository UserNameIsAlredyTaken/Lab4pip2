package lab4;

import lab4.Entitys.Points;

import javax.ejb.EJB;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.Response;

@Path("/main")
public class RestClass {

    @EJB private MainBean mainBean;

    @POST
    public Response login(@FormParam("login") String login,@FormParam("password") String password){
        try {
            int checked = mainBean.check(login,password);
            if(checked==0)
                return Response.ok("0", MediaType.APPLICATION_JSON).build();
            if(checked==1)
                return Response.ok("1", MediaType.APPLICATION_JSON).build();
            return Response.ok("2", MediaType.APPLICATION_JSON).build();
        }catch (Exception e){ return null;}
    }
    @GET
    public Response checkPerson() {
        if(mainBean.isAuthorized())
            return Response.ok("1", MediaType.APPLICATION_JSON).build();
        else
            return Response.ok("0", MediaType.APPLICATION_JSON).build();
    }
    @Path("/getTable")
    @GET
    public Response getTable(){
        if(mainBean.isAuthorized()) {

            return Response.ok(mainBean.getAllPoints(), MediaType.TEXT_HTML).build();
        }
        return Response.ok("0", MediaType.TEXT_HTML).build();
    }
    @Path("/removeTable")
    @POST
    public void removeTable(){
        mainBean.delAllPoints();
    }
    @Path("/out")
    @POST
    public void endSession(){
        mainBean.checkout();
    }
    @Path("/registration")
    @POST
    public void newPerson(@FormParam("login") String login,@FormParam("password") String password){
        mainBean.addPerson(login,password);
    }
    @Path("/newPoint")
    @POST
    public void newPoint(@QueryParam("x") Double x,@QueryParam("y") Double y,@QueryParam("r") Double r){
        mainBean.addPoint(new Points(x,y,r,""));
    }
}
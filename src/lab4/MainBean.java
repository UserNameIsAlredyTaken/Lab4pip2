package lab4;
import lab4.Entitys.Persons;
import lab4.Entitys.Points;
import javax.ejb.*;
import java.util.List;

@Stateless
@LocalBean
@StatefulTimeout(value = 30)
public class MainBean {
    private BDManager bdManager = new BDManager();
    private boolean isAuthorized = false;
    private Persons persons;
    public int check(String login, String password){
        int result = bdManager.checkPerson(login,password);
        if(result==1) {
            isAuthorized = true;
            persons = new Persons(login,password);
        }
        return result;
    }

    public boolean isAuthorized() {
        return isAuthorized;
    }
    public void addPerson(String login, String password){
        persons = new Persons(login,password);
        bdManager.addPerson(persons);
        isAuthorized = true;
    }
    public void addPoint(Points points) {
        points.setPerosonsLogin(persons.getLogin());
        bdManager.addPoints(points);
    }
    public void delAllPoints(){
        bdManager.delAllPersonPoints(persons.getLogin());
    }
    public String getAllPoints(){
        List<Points> list = bdManager.getAllPersonPoints(persons.getLogin());
        String s = "<tr><td>X</td> <td>Y</td> <td> R </td> <td>Result</td></tr>";
        for(int i = 0;i<list.size();i++){
            s+="<tr><td>" + list.get(i).getX() + "</td> <td>" + list.get(i).getY() + "</td> <td>" +
                    list.get(i).getR() + "</td> <td>" + list.get(i).getRes() + "</td></tr>";
        }
        return  s;
    }
    @Remove
    public void checkout() {
        isAuthorized = false;
    }
}

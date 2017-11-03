package lab4.Entitys;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by danil on 25.10.2017.
 */
@Entity
@Table(name = "PERSON")
public class Persons{
    @Id
    private String login;

    @Column
    private int hash;

    public String getLogin(){
        return login;
    }

    public int getHash(){
        return hash;
    }

    public void setLogin(String login){
        this.login = login;
    }

    public void setHash(String pass){
        this.hash = 7;
        for(int i = 0; i < pass.length(); i++){
            this.hash = this.hash*31 + pass.charAt(i);
        }
    }

    public Persons(){}
    public Persons(String login, String pass){
        setLogin(login);
        setHash(pass);
    }
    @Override
    public String toString() {
        return "Person{" + login+ "}";
    }
}

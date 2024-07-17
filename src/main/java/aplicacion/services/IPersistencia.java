package aplicacion.services;

import dominio.Contacto;
import dominio.Subscriptor;

public interface IPersistencia {


    void saveContacto(Contacto contacto);

    Contacto findByEmail(String email);


    void saveSubscriptor(Subscriptor subscriptor);
}

package com.senai.aula.service;

import com.senai.aula.model.Usuario;
import com.senai.aula.repository.UsuarioRespository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class UsuarioService {
    private UsuarioRespository usuarioRespository;

    public UsuarioService(UsuarioRespository usuarioRespository) {
        this.usuarioRespository = usuarioRespository;
    }

    public List<Usuario> listarTodos(){
        return usuarioRespository.findAll();
    }

    public Usuario salvar(@Valid Usuario usuario){
        if(usuarioRespository.findByEmail(usuario.getEmail()).isPresent()){
            throw new IllegalArgumentException("Usuário já cadastrado.");
        }
        return usuarioRespository.save(usuario);
    }
}

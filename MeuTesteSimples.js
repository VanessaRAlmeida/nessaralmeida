package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MeuTesteSimples {

    @Test
    public void testeSomaSimples() {
        int resultado = 2 + 2;
        assertEquals(4, resultado);
    }
}

export interface IBGE {
    id: number;
    nome: string;
    municipio: {
        id: number;
        nome: string;
        microrregiao: {
            id: number;
            nome: number;
            mesoregiao: {
                id: number;
                nome: string;
                UF: {
                    id: number;
                    nome: string;
                    sigla: string;
                    regiao: {
                        id: number;
                        nome: string;
                        sigla: string;
                    }
                }
            }
        }
    };
}

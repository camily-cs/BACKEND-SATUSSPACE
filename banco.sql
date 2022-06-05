create database satusspace;
use satusspace;

create table tbAdminSatus (
	idAdmin int primary key auto_increment,
    nomeAdmin varchar(50) not null,
    cpfAdmin varchar(14) unique not null,
    senha varchar(200) not null,
    dataCadastro char(10),
    ativoAdmin char(1) not null
);

create table tbUsuario(
	idUsuario int auto_increment primary key,
	nomeUsuario varchar(30) not null unique,
	emailUsuario varchar(70) unique not null,
	senha varchar(200) not null,
	dataCadastro char(10), 
	ativoUsuario char(1) not null
)engine InnoDB;

create table tbEndereco(
	idEndereco int auto_increment primary key,
	tipoResidencia varchar(10) not null,
	logradouro varchar(50) not null,
	numero varchar(10) not null,
	complemento varchar(30),
	cep varchar(10) not null
)engine InnoDB;

create table tbEstudante (
	 idEstudante int primary key auto_increment,
	 nomeEstudante varchar(50) not null,
	 cpfEstudante varchar(14) unique not null,
	 dataNascimento date not null,
	 telEstudante int(12) unique not null,
	 emailEstudante varchar(70) unique not null,
	 idEndereco int,
	 idUsuario int not null
) engine InnoDB;

create table tbEmpresa (
	idEmpresa int primary key auto_increment,
    razaoSocial varchar(100) not null unique,
    nomeFantasia varchar(50) not null unique,
    cnpj int(14) unique,
    tipo varchar(50),
    telEmpresa int(12) unique not null,
    idEndereco int not null
)engine InnoDB;

create table bootcamp(
	idBootcamp int auto_increment primary key,
    nomeBootcamp varchar(30) not null unique,
    cargaHoraria varchar(5) not null,
    dataInicio timestamp default current_timestamp(),
    dataTermino date not null,
    idEmpresa int not null
)engine InnoDB;

create table vagaBootcamp(
	idVaga int auto_increment primary key,
    idBootcamp int not null,
	idUsuario int not null,
	idEmpresa int not null
)engine InnoDB;


select * from tbAdminSatus;
insert into tbAdminSatus (nomeAdmin, cpfAdmin, senha, dataCadastro, ativoAdmin) values (
"Camily", "48652605874", "password", "05-06-2022", "S"
);

select * from tbUsuario;
insert into tbUsuario (nomeUsuario, emailUsuario, senha, dataCadastro, ativoUsuario) values (
"Gabriel", "gabrielastazevedo@gmail.com", "password", "05-06-2022", "S"
);
select * from tbUsuario;
insert into tbUsuario (nomeUsuario, emailUsuario, senha, dataCadastro, ativoUsuario) values (
"Adriana", "fofolete@gmail.com", "password", "05-06-2022", "S"
);
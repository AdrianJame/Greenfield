create database greenfield;
use greenfield;


create table tb_admin(
id_admin int primary key auto_increment,
nm_usuario varchar(100),
ds_email varchar(100),
ds_senha varchar(100)
);


insert into tb_admin(nm_usuario, ds_email, ds_senha)
			values('Adrian James', 'adrian@greenfield.com', '31-03-07');

insert into tb_admin(nm_usuario, ds_email, ds_senha)
			values('Pedro Leonildo', 'pedroleonildo@greenfield.com', 'admin@greenfield');

insert into tb_admin(nm_usuario, ds_email, ds_senha)
			values('Pedro Henrique', 'pedrohenrique@greenfield.com', 'admin@greenfield');

insert into tb_admin(nm_usuario, ds_email, ds_senha)
			values('Matheus Ferreira', 'matheusferreira@greenfield.com', 'admin@greenfield');
            
insert into tb_admin(nm_usuario, ds_email, ds_senha)
			values('Kaio Santana', 'kaiosantana@greenfield.com', 'admin@greenfield');
            
create table tb_categoria(
id_categoria int primary key auto_increment,
nm_categoria varchar(100) 
);

insert into tb_categoria(nm_categoria)
					values('Sementes');
                    
insert into tb_categoria(nm_categoria)
					values('Ferramentas');
                    
insert into tb_categoria(nm_categoria)
					values('Fertilizantes');
                    
insert into tb_categoria(nm_categoria)
					values('Cortadores de Grama');
                    
insert into tb_categoria(nm_categoria)
					values('Decorações');                   
					
create table tb_produto (
id_produto int primary key auto_increment,
nm_produto varchar(100),
ds_fabricante varchar(100),
vl_preco int,
nr_garantia int,
ds_produto varchar(1000),
id_categoria int,
foreign key (id_categoria) references tb_categoria (id_categoria),
vl_preco_promocao decimal,
bt_promocao boolean,
qtd_estoque int,
ds_material varchar(100),
ds_dimensoes varchar(100),
ds_extra varchar(1000),
bt_favorito boolean,
ds_img1 varchar(1000),
ds_img2 varchar(1000),
ds_img3 varchar(1000)
);

select * from tb_produto;

create table tb_cliente(
id_cliente int primary key auto_increment,
nm_cliente varchar(100),
ds_email varchar(100),
ds_cpf varchar(100),
ds_senha varchar(100),
ds_telefone varchar(100)
);

create table tb_endereço(
	id_cliente_endereco			int primary key auto_increment,
	id_cliente				int,
    ds_referencia               varchar(200),
    ds_cep						varchar(50),
    ds_logradouro				varchar(400),
    ds_bairro					varchar(100),
    ds_cidade					varchar(100),
    ds_estado					varchar(100),
    ds_numero					varchar(100),
    ds_complemento				varchar(200),
    foreign key (id_cliente) references tb_cliente (id_cliente)
);


create table tb_pedido(
	id_pedido			int primary key auto_increment,
    id_cliente		int,
    id_cliente_endereco	int,
    dt_pedido			datetime,
    cod_nota_fiscal		varchar(200),
    tp_frete			varchar(200),
    vl_frete			decimal(15,2),
    ds_status			varchar(200),
    tp_pagamento		varchar(200),
    foreign key (id_cliente) references tb_cliente (id_cliente),
    foreign key (id_cliente_endereco) references tb_endereço (id_cliente_endereco)
);

create table tb_cartao(
	id_cartao	int primary key auto_increment,
    id_pedido			int,
    nm_cartao			varchar(200),
    nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		varchar(200),
    nr_parcelas			int,
    ds_forma_pagamento	varchar(200),
    foreign key (id_pedido) references tb_pedido (id_pedido)
);


create table tb_reclamacao(
id_reclamacao int primary key auto_increment,
ds_reclamacao varchar(100),
id_cliente int,
foreign key (id_cliente) references tb_cliente (id_cliente)
);


CREATE TABLE tb_item_pedido (
    id_pedido_item		int primary key auto_increment,
    id_pedido			int,
    id_produto			int,
    qtd_itens			int,
    vl_produto			decimal(15,2),
    foreign key (id_pedido) references tb_pedido (id_pedido),
    foreign key (id_produto) references tb_produto (id_produto)
);

create table tb_favorito(
 id_favorito int primary key auto_increment,
 id_cliente int,
 id_produto int,
 foreign key (id_cliente) references tb_cliente (id_cliente),
 foreign key (id_produto) references tb_produto (id_produto)
);


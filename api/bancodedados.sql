use greenfield;

create table tb_cartao(
id_cartao int primary key auto_increment,
nr_cartao int,
nm_titular varchar(100),
vl_cartao decimal(15,2),
ds_cartao varchar(100),
ds_cpf_titular_cartao varchar(100),
dt_nascimento date
);

create table tb_reclamacao(
id_reclamacao int primary key auto_increment,
ds_reclamacao varchar(100)
);

create table tb_cliente(
id_cliente int primary key auto_increment,
nm_cliente varchar(100),
ds_email varchar(100),
ds_cpf varchar(100),
ds_senha varchar(100),
ds_telefone varchar(100),
id_reclamacao int,
id_cartao int,
foreign key (id_reclamacao) references tb_reclamacao(id_reclamacao),
foreign key (id_cartao) references tb_cartao (id_cartao)
);

create table tb_admin(
id_admin int primary key auto_increment,
nm_usuario varchar(100),
ds_email varchar(100),
ds_senha varchar(100)
);
            
create table tb_categoria(
id_categoria int primary key auto_increment,
nm_categoria varchar(100) 
);

insert into tb_categoria(nm_categoria)
					values('');
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
ds_img1,
ds_img2,
ds_img3
);

select * from tb_cliente;

create table tb_endereço(
    id_endereco int primary key auto_increment,
	ds_logradouro varchar(100),
	nr_numero int,
	ds_complemento varchar(100),
	nm_referencia varchar(100),
	ds_bairro varchar(100),
	ds_cidade varchar(100),
	ds_uf varchar(100)
);

create table tb_pedido(
id_pedido int primary key auto_increment,
ds_nota_fiscal varchar(100),
tp_formas_pagamento varchar(100),
qtd_parcelas int,
dt_pedido datetime,
ds_situacao varchar(100),
id_cliente int,
id_endereço int,
foreign key (id_cliente) references tb_cliente (id_cliente),
foreign key (id_endereço) references tb_endereço (id_endereco)
);

create table tb_item_pedido(
id_item_pedido int primary key auto_increment,
qtd_item int,
id_pedido int,
id_produto int,
foreign key(id_pedido) references tb_pedido (id_pedido),
foreign key (id_produto) references tb_produto (id_produto)
);

create table tb_img(
id_img int primary key auto_increment,
ds_img varchar(1000),
id_produto int,
foreign key (id_produto) references tb_produto (id_produto)
);



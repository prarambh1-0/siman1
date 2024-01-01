PGDMP      #            
    {            siman    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    siman    DATABASE     x   CREATE DATABASE siman WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE siman;
                postgres    false            �            1259    16414    individual_std_add    TABLE     �   CREATE TABLE public.individual_std_add (
    fisrt_name text NOT NULL,
    last_name text NOT NULL,
    contact_number integer NOT NULL,
    role text NOT NULL,
    assigned_batch text NOT NULL
);
 &   DROP TABLE public.individual_std_add;
       public         heap    postgres    false            �            1259    16409    std_db_creation    TABLE     �   CREATE TABLE public.std_db_creation (
    batch_name text NOT NULL,
    speciality text NOT NULL,
    level text NOT NULL,
    academic_year text NOT NULL
);
 #   DROP TABLE public.std_db_creation;
       public         heap    postgres    false            �            1259    16399    users    TABLE     W   CREATE TABLE public.users (
    user_name text NOT NULL,
    password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16419    workshop_creation    TABLE     �   CREATE TABLE public.workshop_creation (
    workshop_name text NOT NULL,
    date date NOT NULL,
    total_participents integer NOT NULL,
    total_batches integer NOT NULL,
    batch text NOT NULL,
    "limit" integer NOT NULL
);
 %   DROP TABLE public.workshop_creation;
       public         heap    postgres    false            �            1259    16424    ws_detail_update    TABLE     -  CREATE TABLE public.ws_detail_update (
    workshop_name text NOT NULL,
    date date NOT NULL,
    lead_faculty text NOT NULL,
    workshop_type text NOT NULL,
    attendence_sheet bytea NOT NULL,
    pre_post_result bytea NOT NULL,
    feedback bytea NOT NULL,
    workshop_photos bytea NOT NULL
);
 $   DROP TABLE public.ws_detail_update;
       public         heap    postgres    false            �          0    16414    individual_std_add 
   TABLE DATA           i   COPY public.individual_std_add (fisrt_name, last_name, contact_number, role, assigned_batch) FROM stdin;
    public          postgres    false    217   g       �          0    16409    std_db_creation 
   TABLE DATA           W   COPY public.std_db_creation (batch_name, speciality, level, academic_year) FROM stdin;
    public          postgres    false    216   �       �          0    16399    users 
   TABLE DATA           4   COPY public.users (user_name, password) FROM stdin;
    public          postgres    false    215   �       �          0    16419    workshop_creation 
   TABLE DATA           s   COPY public.workshop_creation (workshop_name, date, total_participents, total_batches, batch, "limit") FROM stdin;
    public          postgres    false    218   �       �          0    16424    ws_detail_update 
   TABLE DATA           �   COPY public.ws_detail_update (workshop_name, date, lead_faculty, workshop_type, attendence_sheet, pre_post_result, feedback, workshop_photos) FROM stdin;
    public          postgres    false    219   �       `           2606    16405    users users_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_name);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     
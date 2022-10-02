<template>
  <q-page padding>
    <div class="flex flex-center q-mt-md">
      <div class="text-h3">MENU BOBA HOUSE</div>
    </div>
    <br />
    <!-- Search Button -->
    <div class="flex flex-center">
      <q-input
        rounded
        outlined
        color="dark"
        v-model="text"
        label="Search"
        class="buttonsearch"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <!-- Catagory dropdown-->
    <dir class="flex flex-center">
      <q-select
        borderless
        color="dark"
        v-model="model"
        :options="options"
        label="Catagory"
        class="buttoncatagory"
      />
    </dir>
      <!-- Beverag -->
      <div class="flex flex-start q-pa-md" id="layoutbeverage">
        <div class="q-pa-md row  items-start q-gutter-md">
          <div >
            <q-card class="my-card">
              <img
                src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
              />
              <q-card-actions align="left">
                <div>Meu1</div>
              </q-card-actions>
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="add" />
              </q-card-actions>
            </q-card>
          </div>

          <div>
            <q-card class="my-card">
              <img
                src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
              />
              <q-card-actions align="left">
                <div>Meu1</div>
              </q-card-actions>
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="add" />
              </q-card-actions>
            </q-card>
          </div>

          <div>
            <q-card class="my-card">
              <img
                src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
              />
              <q-card-actions align="left">
                <div>Meu1</div>
              </q-card-actions>
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="add" />
              </q-card-actions>
            </q-card>
          </div>

          <div>
            <q-card class="my-card">
              <img
                src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
              />
              <q-card-actions align="left">
                <div>Meu1</div>
              </q-card-actions>
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="add" />
              </q-card-actions>
            </q-card>
          </div>

          <div>
            <q-card class="my-card">
            <img
              src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
            />
            <q-card-actions align="left">
              <div>Meu1</div>
            </q-card-actions>
            <q-card-actions align="right">
              <q-btn flat round color="red" icon="add" />
            </q-card-actions>
          </q-card>
          </div>

          <div>
           <q-card class="my-card ">
            <img
              src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
            />
            <q-card-actions align="left">
              <div>Meu1</div>
            </q-card-actions>
            <q-card-actions align="right">
              <q-btn flat round color="red" icon="add" />
            </q-card-actions>
          </q-card>
         </div>

          <div>
            <q-card class="my-card">
            <img
              src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2019/04/how-to-make-boba-tea.png?fit=1170%2C780&ssl=1"
            />
            <q-card-actions align="left">
              <div>Meu1</div>
            </q-card-actions>
            <q-card-actions align="right">
              <q-btn flat round color="red" icon="add" />
            </q-card-actions>
          </q-card>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
.buttonsearch {
  width: 65%;
}
.buttoncatagory {
  width: 10%;
  margin-left: 0%;
  margin-right: 55%;
}
.my-card {

  border-radius: 4%;
  width: 100%;
  max-width: 300px;
}
#layoutbeverage{
  margin: auto;
  margin-left: 6%;
  margin-right: 0%;
}
</style>

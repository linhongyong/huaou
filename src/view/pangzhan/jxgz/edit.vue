<template>
<div>
  <div style="width: 90%; margin: 0 auto;">
    <div class="flex" >
      <div class="flex-6 padding-v-5">
              当日气候：
        <RadioGroup v-model="obj.weather">
          <Radio label="晴">
            <span>晴</span>
          </Radio>
          <Radio label="阴">
              <span>阴</span>
          </Radio>
          <Radio label="雨">
              <span>雨</span>
          </Radio>
        </RadioGroup>
      </div>
      
      <div class="flex-6 padding-v-5">施工单位：<Input v-model="obj.buildCompany" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
    </div>
    <!--<div class="flex padding-v-5">旁站的部位或工序：</div>-->

    <!--<div class="flex" >
      <div class="flex-6 padding-v-5">旁站监理开始时间：<Input v-model="obj.startTime" placeholder="" clearable :maxlength="200" style="width: 250px" /></div>
      <div class="flex-6 padding-v-5">旁站监理结束时间：<Input v-model="obj.endTime" placeholder="" clearable :maxlength="200" style="width: 250px" /> </div>
    </div>-->

    <div class="padding-left-40">
      <div class=" padding-v-5">一、机械设备：</div>
      <div class="flex padding-left-40">
        <div class=" padding-v-5">钻机型号: <Input v-model="obj.drillModel" placeholder="" clearable :maxlength="200" style="width: 150px" /></div> 
        <div class="padding-v-5 margin-l-10">工作状态: <Input v-model="obj.workState" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
				<div class="padding-v-5 margin-l-10">桩机号: <Input v-model="obj.pilingMachine" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
      </div>
    </div>
    <div class="padding-left-40">
      <div class="">二、材料质量</div>
      <div class="padding-left-40">
        <div class="">
          <div class="">钢筋笼配筋：</div>
          <div class="padding-v-5 flex padding-left-40">
            <div class="flex-3">主筋数量 : 
              <Input v-model="obj.mainBarCount" placeholder="" clearable :maxlength="200" style="width: 100px" />
            </div>
            <div class="flex-3">主筋 : 
              <Input class="" v-model="obj.mainBarType" placeholder="" clearable :maxlength="200" style="width: 100px" />
            </div>
            <div class="flex-3">箍筋 : 
              <Input class="" v-model="obj.circularBar" placeholder="" clearable :maxlength="200" style="width: 100px" />
            </div>
          </div>
          <div class="padding-v-5 flex padding-left-40">
						<div class="flex-3">加强箍 : 
							<Input class="" v-model="obj.strongBar" placeholder="" clearable :maxlength="200" style="width: 100px" />
							</Input>
						</div>
            <div class="flex-3">钢筋笼数量 : 
              <Input class="" v-model="obj.barCageCount" placeholder=""  :maxlength="200" style="width: 100px" />
            </div>
            <div class="flex-3">钢筋笼长度 :
							<Input v-model="obj.length" placeholder="" clearable :maxlength="200" style="width: 100px" />
						</div>
          </div>
        </div>
        <div class="padding-v-5 flex">
        <div class="">钢筋及焊接结论：<Input v-model="obj.weldingResult" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
        </div>
      </div>
    </div>
    <div class="padding-left-40">
       <div class="">三、施工情况：</div>
       <div class="padding-v-5 padding-left-40">
           <div class="flex">
              <div class="flex-3 padding-v-5">设计桩径  : 
                <Input class="" v-model="obj.pileDiameter" placeholder="" :maxlength="200" style="width: 100px" >
                  <span slot="suffix" style="line-height: 30px;">mm</span>
                </Input>
               </div>
              <div class="flex-3">设计桩长B : 
                <Input class="" v-model="obj.designPileLength" placeholder="" :maxlength="200" style="width: 100px" >
                  <span slot="suffix" style="line-height: 30px;">m</span>
                </Input>
              </div>
							<!-- <div class="flex-3">本次测量成孔深度 : 
								<Input class="" v-model="obj.bencishen" placeholder="" :maxlength="200" style="width: 100px" >
									<span slot="suffix" style="line-height: 30px;">m</span>
								</Input>
							</div> -->
            </div>
            <div class="flex padding-v-5">
             <div class="flex-3">平台标高/护筒标高A : 
              <Input class="" v-model="obj.platformElevation" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m</span>
              </Input>
             </div>
             
             <div class="flex-3">桩顶标高C : 
              <Input class="" v-model="obj.pileTopHeight" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m</span>
              </Input>
             </div>
           </div>
       </div>
       <div class="padding-v-5 padding-left-40">
<!--        <div class="flex padding-v-5">
             <div class="flex-3">开孔时间 : <Input v-model="obj.openTime" placeholder="" clearable :maxlength="200" style="width: 250px" /></div>
             <div class="flex-3">终孔时间 : <Input v-model="obj.stopTime" placeholder="" clearable :maxlength="200" style="width: 250px" /></div>
        </div>
				<div class="flex padding-v-5">
						<div class="flex-3">下钢筋笼开始时间 : <Input v-model="obj.dropCageStartTime" placeholder="" clearable :maxlength="200" style="width: 250px" /></div>
						<div class="flex-3">下钢筋笼结束时间 : <Input v-model="obj.dropCageEndTime" placeholder="" clearable :maxlength="200" style="width: 250px" /></div>
				</div>
				<div class="flex padding-v-5">
						<div class="flex-3">二次清孔开始时间 : <Input v-model="obj.secondCleanStartTime" placeholder="" clearable :maxlength="200" style="width: 250px" /></div>
						<div class="flex-3">二次清孔结束时间 : <Input v-model="obj.secondCleanEndTime" placeholder="" clearable :maxlength="200" style="width: 250px" /></div>
				</div> -->
        <div class="flex padding-v-5">  
          <div class="flex-3">实际孔深 : 
            <Input class="" v-model="obj.actualDeep" placeholder="" :maxlength="200" style="width: 100px" >
              <span slot="suffix" style="line-height: 30px;">m</span>
            </Input>
          </div> 
					<div class="flex-3">二次测量孔深 : 
            <Input class="" v-model="obj.secondActualDeep" placeholder="" :maxlength="200" style="width: 100px" >
              <span slot="suffix" style="line-height: 30px;">m</span>
            </Input>
          </div> 
        </div>
				<div class="flex padding-v-5">  
					<div class="flex-3">有效桩长  :
						<Input class="" v-model="obj.validPileLength" placeholder="" :maxlength="200" style="width: 100px" >
							<span slot="suffix" style="line-height: 30px;">m</span>
						</Input>
					</div>
				</div>
				<div class="flex padding-v-5">  
					<div class="flex-3">泥浆比重 : 
						<Input class="" v-model="obj.slurryProp" placeholder="" :maxlength="200" style="width: 100px" >
						</Input>
					</div> 
					<div class="flex-3">入岩深度 : 
						<Input class="" v-model="obj.deptRock" placeholder="" :maxlength="200" style="width: 100px" >
							<span slot="suffix" style="line-height: 30px;c">m</span>
						</Input>
					</div> 
<!-- 					<div class="flex-3">入岩时间  :
						<Input class="" v-model="obj.rockTime" placeholder="" :maxlength="200" style="width: 160px" >
						</Input>
					</div> -->
				</div>
       </div>
     </div>
    <div class="  padding-left-40">
       <div class="">四、灌注情况：</div>
       <div class="padding-v-5 padding-left-40">
				 <div class="flex">
				 	<div class="flex-3">砼强度等级C : <Input v-model="obj.concreteStrongLevel" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
					<div class="flex-3">设计坍落度 : 
						 <Input class="" v-model="obj.designSlump" placeholder="" :maxlength="200" style="width: 100px" >
							<span slot="suffix" style="line-height: 30px;">mm</span>
						</Input>
					</div>
				 	<!-- <div class="flex-3">充盈系数 : <Input v-model="obj.fillingCoefficient" placeholder="" clearable :maxlength="200" style="width: 200px" /></div> -->
				 </div>
       </div>
<!--      <div class="padding-v-5 padding-left-40">
        <div class="flex">
					 <div class="flex-3">灌注开始时间 : <Input v-model="obj.perfusionStartTime" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
					 <div class="flex-3">灌注结束时间 : <Input v-model="obj.perfusionEndTime" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
				</div>
       </div> -->
       <div class="padding-v-5 padding-left-40">
        <div class="padding-v-5 flex">
             <div class="flex-3">实测坍落度 : 
               <Input class="" v-model="obj.actualSlump" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m³</span>
              </Input>
             </div>
             <div class="flex-3">砼理论方量 : 
               <Input class="" v-model="obj.theoryVolume" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m³</span>
              </Input>
             </div>
        </div>
        <div class="padding-v-5 flex">
             <div class="flex-3">砼实灌方量  : 
               <Input class="" v-model="obj.actualVolume" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m³</span>
              </Input>
             </div>
            <div class="flex-3 margin-l-10">试块制作组数  : 
              <Input class="" v-model="obj.sampleMaking" placeholder="" clearable :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">组</span>
              </Input>
            </div>
       <!--     <div class="flex-1"></div>
            <div class="flex-1"></div> -->
        </div>
       </div>
    </div>
    <!-- <div class="flex">
      <span class="padding-left-40">孔深照片：</span>
      <img  v-for="(item, index) in obj.actualDeepImg" v-bind:key="index" :src="item" width="100" height="100"/>
      
    </div>
    <div class="flex">
      <span class="padding-left-40">钢筋笼照片组：</span>
      <img  v-for="(item, index) in obj.barCageCountImg" v-bind:key="index" :src="item" width="100" height="100"/>
    </div>
    <div class="flex">
      <span class="padding-left-40">岩样照片：</span>
      <img  v-for="(item, index) in obj.deptRockUrl" v-bind:key="index" :src="item" width="100" height="100"/>
    </div> -->
    <!--<div class="flex">
            孔深照片：
      <img :src="obj.actualDeepImg[0]" v-if="obj.actualDeepImg.length > 0" width="100" height="100"/>
      <span class="padding-left-40">钢筋笼照片组：</span>
      <img  v-for="(item, index) in obj.barCageCountImg" v-bind:key="item" :src="item" width="100" height="100" v-if="index<5"/>
    </div>-->
    <div class="" style="margin-top: 30px;">
      <div class="" style="min-height: 100px;">
         发现问题及处理情况：
         <div class="padding-v-5" style="text-indent: 2em;">
          <!--{{ obj.problemContent ? obj.problemContent : "施工正常" }}-->
          <Input v-model="obj.problemContent" placeholder="" clearable :maxlength="500" style="width: 90%" type="textarea" :rows="5"/>
         </div>
      </div> 
    </div>
  </div>
  <div class="" style="text-align: right;">
      <Button type="primary" @click="handleSubmit()">保存</Button>
     </div>  
</div> 
</template>
<script>
import jxgzApi from '@/api/jxgz-api'
export default {
  data () {
    return {
      formItem: {
        templateId: 0,
        weather: '',
        buildCompany: '',
        building: ''
      },
      templateList: []
    }
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {
          actualDeepImg: [],
          barCageCountImg: []
        }
      }
    }
  },
  methods: {
      handleSubmit () {
        this.obj.mainBar = `${this.obj.mainBarNum}φ${this.obj.mainBarType}`
        let data = this.obj;
        jxgzApi.updateJxZkGzzPzjl(data).then(res => {
        console.log(res)
        if (res.data.code === 'Success') {
          this.$Message.success({
            content: '修改成功！',
            onClose: () => {
               this.$emit('editModalClose', true)
            }
          });
        }
      })

    },
  },
  mounted () {

  }
}
</script>
<style>
  .flex{
  display: flex;
  }
  .flex-6{
  flex: 6;
  }
  .flex-3{
  flex: 3;
  }
  .row{
  overflow: hidden;
  }
  .float-l{
  float: left;
  }
  .padding-v-5{
  padding-top: 5px;
  padding-bottom: 5px;;
  }
  .padding-left-40{
  padding-left: 40px;;
  }
  .btn{
  float: right;
  background-color: #1890FF;
  outline: none;
  border: none;
  padding: 5px;
  color: white;
  }
  .margin-l-10{
    margin-left: 10px;
  }
</style>
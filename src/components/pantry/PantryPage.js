import {Button, Col, Container, Row, FormControl, InputGroup} from "react-bootstrap";
import FoodItemCard from "./FoodItemCard";
import LoadingItem from "../loading/LoadingItem";
import NewFood from "./NewFoodItem";
import {useState} from "react";

export default function PantryPage({
                                       food, getFoodPending, getFoodFailure, getFoodSuccess,
                                       createFoodFailure, createFoodPending, createFoodSuccess,
                                       deleteFoodFailure, deleteFoodPending, deleteFoodSuccess,
                                       updateFoodFailure, updateFoodPending, updateFoodSuccess,
                                       handleDeleteFoodItem, handleGetFoodItems, handleCreateFoodItem,
                                       handleUpdateFoodItem, favorite
                                   }) {
    const [showNewFood, setShowNewFood] = useState(false)

    function handleShowNewFood() {
        setShowNewFood(true)
    }
    function handleCloseNewFood() {
        setShowNewFood(false)
    }

    return (<Container fluid>
        {/*<img src={PantryBanner} alt={"Let's Get Cooking!"}/>*/}
        <Row>
            <Col>
                <h2>Pantry</h2>
            </Col>
            <Col xs={2}>
                <Row>
                    <NewFood handleCloseNewFood={handleCloseNewFood} handleShowNewFood={handleShowNewFood} show={showNewFood} handleCreateFoodItem={handleCreateFoodItem}/>
                </Row>
            </Col>
        </Row>
        <Row>
            <InputGroup className="my-1">
                <FormControl
                    placeholder="Find food item"
                    aria-label="Search pantry"
                    aria-describedby="find-food-item"
                />
                <Button variant="outline-secondary">
                    Search
                </Button>
            </InputGroup>
        </Row>
        <Row>
            {
                food && !getFoodPending ? food.map((food, idx) =>
                    <FoodItemCard key={idx} food={food} favorite={favorite}
                                              handleDeleteFoodItem={handleDeleteFoodItem}
                                              handleUpdateFoodItem={handleUpdateFoodItem}
                    />) : getFoodPending && <LoadingItem/>
            }
        </Row>

    </Container>)
}